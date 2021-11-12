import { Injectable, NgZone } from "@angular/core";
import { User } from "../types/interfaces";
import { Auth } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import * as auth from "firebase/auth";
import { v4 as uuidV4 } from "uuid";
import { MatSnackBar } from "@angular/material/snack-bar";
import UserCredential = firebase.auth.UserCredential;
import AuthProvider = firebase.auth.AuthProvider;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  // User data of auth user
  userData: any;
  // Firestore document of the user
  userDoc: any;
  // Observable
  user: Observable<User|undefined>|undefined;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warnings
    public _snackBar: MatSnackBar
  ) {
    /* Saving user data in localstorage when logged in and
    * setting up null when logged out
    * */
    this.afAuth.authState.subscribe(user => {

      console.log('AuthService this.afAuth.authState.subscribe user', user);
      if(user){
        this.userData = user;

        this.userDoc = this.afs.doc<User>(`users/${user.uid}`);
        console.log('AuthService constructor this.userDoc', this.userDoc);
        /* itemDoc.valueChanges()
        * return an Observable
        * */
        this.user = this.userDoc.valueChanges();
        console.log('AuthService constructor this.user', this.user);
        this.user && this.user.subscribe(user => {
          user && localStorage.setItem('user', JSON.stringify(user));
        });
      }else{
        localStorage.removeItem('user');
      }
    });
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('user') !== null ;
  }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: UserCredential) => {

        console.log('AuthService signIn result', result);
        // Create user in Firestore from FireAuth user info
        result.user &&  this.setUserData(result.user);


        console.log("AuthService login this.userData", this.userData);
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      })
      .catch((error: any) => {
        console.log("login error", error.code, error);
        this.ngZone.run(() => {
          switch (error.code){
            case 'auth/user-not-found':
              this._snackBar.open("Sorry this email doesn't exists! Please verify the email or sign-up.", 'close', {
                verticalPosition: 'top',
                horizontalPosition: 'center',
                // Extra classes to be added to the snackbar container
                panelClass: ['alert-message-warning']
              });
              break;
            case "auth/wrong-password":
              this._snackBar.open("Wrong password! Please enter the right one.", "close", {
                verticalPosition: 'top',
                horizontalPosition: 'center',
                // Extra classes to be added to the snackbar container
                panelClass: ['alert-message-warning']
              });
              break;
          }
        });


      })
  }

  loginWithGoogle(){
    return this.loginWithProvider(new auth.GoogleAuthProvider());
  }

  loginWithFacebook(){
    return this.loginWithProvider(new auth.FacebookAuthProvider());
  }

  loginWithTwitter(){
    return this.loginWithProvider(new auth.TwitterAuthProvider());
  }

  loginWithProvider(provider: AuthProvider){
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        // Create User from Auth provider user
        console.log('loginWithProvider result', result);
        switch (true){
          case result.hasOwnProperty('user'):
            result.user && this.setUserData(result.user);
            break;
        }

        this.ngZone.run(() => {
          this.router.navigate(['/']);
        })
      })
      .catch((error) => {
        console.log(`Login with provider ${provider.providerId} error`, error)
      })
  }

  signUp(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {

        // Create Firestore User from FireAuth user
        result.user && this.setUserData(result.user);
        // Call the sendVerificationEmail()
        this.sendVerificationEmail(email);
        /*Redirect to validate sign-in
        this.ngZone.run(() => {
          this.router.navigate(['/verify-email']);
        });
         */
        return true;
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

  sendVerificationEmail(email: string){
    const uuid = uuidV4();
    const actionCodeSettings = {
      url: `https://localhost:4200/validateSignUp?verification_code=${uuid}`,
      handleCodeInApp: true
    };
      return this.afAuth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // Save to Firestore user email and uuid

        // Save to localStorage
        localStorage.setItem('verification-email', JSON.stringify({ id: uuid, email  }));
        this.router.navigate(['verify-email']);
      })
      .catch( error => {

      })
  }

  setUserData(user: firebase.User){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      id: user.uid,
      email: user.email,
      username: user.displayName !== null
                ? user.displayName
                : (user.email !== null ? user.email.split('@')[0] : "Sans nom"),
      avatar: user.photoURL !== null ? user.photoURL : 'https://loremflickr.com/640/360',
      emailVerified: user.emailVerified
    };

    return userRef.set(userData, { merge: true });
  }

  signOut(){
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }


}

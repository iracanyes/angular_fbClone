import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/AuthService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  emailFormControl: FormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  password: FormControl = new FormControl('', [
    Validators.required
  ]);
  hidePasswd1: boolean = true;
  confirmPassword: FormControl = new FormControl('', [
    Validators.required
  ]);
  hidePasswd2: boolean = true;

  constructor(
    private __authService: AuthService,
    private __snackBar: MatSnackBar,
    private __router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){
    if(this.password.value.length > 7 && this.password.value === this.confirmPassword.value){
      this.__authService.signUp(this.emailFormControl.value, this.password.value)
        .then(result => {
          if(result === true){
            this.__router.navigate(['/login']);
            this.__snackBar.open(
              "Inscription accomplie.\n "
              + "Visitez votre boîte de réception pour valider votre inscription."
            );

          }
        });
    }

  }

}

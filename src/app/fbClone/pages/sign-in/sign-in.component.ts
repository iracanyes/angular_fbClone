import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import {AuthService} from "../../../../services/AuthService";

@Component({
  selector: 'fb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
  ]);

  hide: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this._authService.login(this.emailFormControl.value, this.passwordFormControl.value);
  }

  loginWithGoogle(){
    this._authService.loginWithGoogle();
  }

  loginWithTwitter(){
    this._authService.loginWithTwitter();
  }

  loginWithFacebook(){
    this._authService.loginWithFacebook();
  }

}

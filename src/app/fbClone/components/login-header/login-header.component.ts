import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/AuthService";
import {ActivatedRoute} from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: 'fb-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  isSignUpPage: boolean = false;
  hide: boolean = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private __authService: AuthService,
    private __route: ActivatedRoute,
  ) {
    this.__route.url.pipe(map(el => {
      console.log('LoginHeader constructor router.url', el);
    }));
  }

  ngOnInit(): void {
    this.__route.url.pipe(map(el => {
      console.log('LoginHeader onInit router.url', el);
    }));
  }

  login(){
    this.__authService.login(this.emailFormControl.value, this.passwordFormControl.value);
  }



}

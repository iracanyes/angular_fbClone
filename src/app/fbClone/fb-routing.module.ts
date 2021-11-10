import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate
} from "@angular/fire/compat/auth-guard";
import {FbCloneComponent} from "./fb-clone/fb-clone.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {BrowserModule} from "@angular/platform-browser";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {VerifyEmailComponent} from "./pages/verify-email/verify-email.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {LoginHeaderComponent} from "./components/login-header/login-header.component";

const routes: Routes = [
  {
    path: '',
    component: FbCloneComponent,
    children: [
      { path: 'sign-up', component: SignUpComponent},
      {
        path: 'login',
        component: SignInComponent,
        children: [
          { path: '', component: LoginHeaderComponent },
        ]
      },

      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      {
        path: '',
        component: HomepageComponent,
        /* Angular Fire Routes Guard
         * https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
        * */
        ...canActivate(() => redirectUnauthorizedTo(['login']))
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class FbRoutingModule{}

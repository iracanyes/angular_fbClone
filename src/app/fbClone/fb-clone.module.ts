import { NgModule } from "@angular/core";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {HeaderModule} from "./components/header/header.module";
import { FbCloneComponent } from './fb-clone/fb-clone.component';
import {FbRoutingModule} from "./fb-routing.module";
import { NavLeftMenuComponent } from './components/aside/nav-left-menu/nav-left-menu.component';
import { StoryLineComponent } from './components/story-line/story-line.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import {IconModule} from "@ant-design/icons-angular";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CreatePostComponent } from './components/create-post/create-post.component';
import {MatTabGroup, MatTabsModule} from "@angular/material/tabs";
import {MatTable, MatTableModule} from "@angular/material/table";
import { AddPhotoVideoComponent } from './components/add-photo-video/add-photo-video.component';
import { SelectPostVisibilityComponent } from './components/select-post-visibility/select-post-visibility.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    HomepageComponent,
    FbCloneComponent,
    NavLeftMenuComponent,
    StoryLineComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    LoginHeaderComponent,
    CreatePostComponent,
    AddPhotoVideoComponent,
    SelectPostVisibilityComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    FontAwesomeModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    HeaderModule,
    FbRoutingModule,
    ReactiveFormsModule,
    IconModule,
    MatTabsModule,
    MatRippleModule
  ],
  exports: [],
  providers: []
})
export class FbCloneModule { }

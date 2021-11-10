import { NgModule } from '@angular/core';
import "@angular/common/locales/global/fr";
import "@angular/common/locales/global/fr-BE";
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import {HeroParentComponent} from "./Introduction/Component/ComponentInteraction/hero-parent.component";
import {HeroChildComponent} from "./Introduction/Component/ComponentInteraction/hero-child.component";
import {AppDevComponent} from "./app-dev.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TourOfHeroesModule} from "./tour-of-heroes/tour-of-heroes.module";
import {HeaderComponent} from "./navigation/header/header.component";
import {FbCloneModule} from "./fbClone/fb-clone.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { IconModule } from "@ant-design/icons-angular";
import {environment} from "../environments/environment";

@NgModule({
  /* Déclare les composants directives et pipes qui appartiennent à ce  module
   */
  declarations: [
    AppComponent,
    HeaderComponent,
    AppDevComponent,
    HeroParentComponent,
    HeroChildComponent,
    PageNotFoundComponent
  ],
  /* Subsets of declarations that should be visible and usable in the component templates of the NgModules
   * Remarque: The root NgModule doesn't need to export anything because other modules don't need to import the root NgModule!
   */
  exports: [],
  // D'autres modules dont les classes exportées sont nécessaire aux templates de composants
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    IconModule,
    TourOfHeroesModule,
    FbCloneModule,
    /*
     * The order of route configuration is important because the router accepts the first route that matches a navigation request path.
     * As AppRoutingModule contains the defaults routes path ["**", ""]
     * it must be placed at last position.
     */
    AppRoutingModule,
    FontAwesomeModule,
  ],
  /* Creators of services that this NgModule contributes to the global collection of services;
  they become accessible in all parts of the application.
  You can also specify providers at the component level
   */
  providers: [],
  /* Main application view, called the root component
   * which hosts all other application views.
   * Only the root NgModule should set the bootstrap property!!!
   */
  bootstrap: [AppComponent]
})
export class AppModule { }

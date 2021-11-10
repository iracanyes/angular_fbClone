/**
 *
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroListComponent } from "./tour-of-heroes/heroes/hero-list/hero-list.component";
import { HeroDetailComponent } from "./tour-of-heroes/heroes/hero-detail/hero-detail.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeroParentComponent} from "./Introduction/Component/ComponentInteraction/hero-parent.component";
import { AppDevComponent } from "./app-dev.component";
import {HomepageComponent} from "./fbClone/pages/homepage/homepage.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TourOfHeroesComponent} from "./tour-of-heroes/tour-of-heroes.component";

// Sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dev', component: AppDevComponent },
  {
    path: 'tour-of-heroes',
    loadChildren: () => import('./tour-of-heroes/tour-of-heroes.module')
      .then(m => m.TourOfHeroesModule)
  },
  /*
  {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      { path: 'heroes', component: HeroListComponent },

    ]
  },
  */
  {
    path: 'intro/component/component-interaction',
    component: HeroParentComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

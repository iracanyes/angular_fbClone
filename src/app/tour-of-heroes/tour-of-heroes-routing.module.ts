import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroesModule } from "./heroes/heroes.module";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {TourOfHeroesComponent} from "./tour-of-heroes.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {CrisisDetailComponent} from "./crisis-center/crisis-detail/crisis-detail.component";
import {HeroDetailComponent} from "./heroes/hero-detail/hero-detail.component";
import {HeroListComponent} from "./heroes/hero-list/hero-list.component";

const tourOfHeroesRoutes: Routes = [
  {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      {
        path: 'crisis-center',
        component: CrisisCenterComponent,
      },
      {
        path: 'heroes',
        component: HeroListComponent
      },
      { path: 'crisis-detail', component: HeroDetailComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      tourOfHeroesRoutes,
      { enableTracing: true }
    ),
  ],
  exports: [
    RouterModule,
    HeroesModule,
    CrisisCenterModule
  ]
})
export class TourOfHeroesRoutingModule{}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: 'tour-of-heroes/heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' }
  },
  /* Routing with parameters
   * <a [routerLink]='['/hero',hero.id]'></a>
   */
  {
    path: 'tour-of-heroes/hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

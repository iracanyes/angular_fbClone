import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HeroesComponent} from "./heroes.component";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    MatButtonModule
  ]
})
export class HeroesModule { }

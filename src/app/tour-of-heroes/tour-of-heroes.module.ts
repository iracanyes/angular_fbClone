import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TourOfHeroesComponent } from "./tour-of-heroes.component";
import { TourOfHeroesRoutingModule } from "./tour-of-heroes-routing.module";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroesModule} from "./heroes/heroes.module";
import { HeroesRoutingModule } from "./heroes/heroes-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {CrisisCenterRoutingModule} from "./crisis-center/crisis-center-routing.module";

@NgModule({
  declarations: [
    TourOfHeroesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TourOfHeroesRoutingModule,
    MatMenuModule,
    FormsModule,
    HeroesModule,
    MatIconModule,
    FlexModule,
    CrisisCenterModule,
  ],
})
export class TourOfHeroesModule {

}

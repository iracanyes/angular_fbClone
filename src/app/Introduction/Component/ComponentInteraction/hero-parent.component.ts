/**
 * The HeroParentComponent nests the child HeroChildComponent inside an *ngFor repeater, binding its master string property to the child's master alias, and each iteration's hero instance to the child's hero property.
 */

import { Component } from "@angular/core";
import { HEROES } from "./hero";

@Component({
  selector: "app-hero-parent",
  template: `
    <h2>{{ master }} controls {{ heroes.length }}</h2>

    <app-hero-child
        *ngFor="let hero of heroes"
        [hero]="hero"
        [master]="master"
    >
    </app-hero-child>
  `,
})
export class HeroParentComponent {
  heroes = HEROES;
  master = "Master";
}

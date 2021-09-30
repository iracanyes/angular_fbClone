import { Component, Input} from "@angular/core";
import { Hero } from "./hero";

@Component({
  selector: "app-hero-child",
  template: `
    <h3>{{ hero.name }} says:</h3>
    <p>I, {{ hero.name }}, am at your service, {{ masterName }}</p>
  `,
})
export class HeroChildComponent {
  @Input() hero: Hero = { name: '', power: ''};
  // The second @Input aliases the child component property name masterName as 'master'
  @Input('master') masterName = ''; // ts-lint: disable-line: no-input-rename
}

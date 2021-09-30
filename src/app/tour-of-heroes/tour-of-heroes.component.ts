import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from './animations';

@Component({
  selector: "app-tour-of-heroes",
  templateUrl: "./tour-of-heroes.component.html",
  styleUrls: ["./tour-of-heroes.component.css"],
  animations: [ slideInAnimation ]
})
export class TourOfHeroesComponent{
  /*
   * The getAnimationData() function returns the animation property from the data provided through the ActivatedRoute. The animation property matches the transition names you used in the slideInAnimation defined in animations.ts.
   */
  getAnimationData(outlet: RouterOutlet){
    return outlet
      && outlet.activatedRouteData
      && outlet.activatedRouteData.animation;
  }
}

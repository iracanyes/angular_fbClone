import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import { Hero } from "../../../../types/interfaces";
import {LoggerService} from "../../../../services/LoggerService";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import {HeroService} from "../../../services/tour-of-heroes/hero.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
  providers: [ LoggerService ]
})
export class HeroDetailComponent implements OnInit, OnChanges{
  // this property is bound using its original name.
  hero$!: Observable<Hero>;
  // this property value is bound to a different property name
  // when this component is instantiated in a template
  @Input("newPropertyName") power = "";

  // Add services as private variables to the constructor so that Angular injects them
  // (them visible to the component)
  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    /* use the ActivatedRoute service to retrieve the parameter for the route, pull the hero `id` from parameters and retrieve the hero to display
     * When the map changes, paramMap gets the 'id' parameter from the changed parameters
     * AsyncPipe handle the observable subscription and the component's 'hero' property will be (re)set with the retrieved hero.
     */
    this.hero$ = this.route.paramMap.pipe(
      /* SwitchMap
       * it flattens the Observable<Hero> that 'HeroService' returns and cancels previous pending requests.
       * If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id,
       * switchMap discards that old request and returns the hero for the new id
       */
      switchMap((params: ParamMap, index ) => {
        return this.heroService.getHero(params.get('id')!)
      })
    )

  }

  ngOnChanges(changes: SimpleChanges){
    for(const propName in changes){
      const chng = changes[propName];
      this.logger.info(`${propName} is equal to:`, chng);
    }
  }

  goToHeroes(hero: Hero){
    const heroID = hero ? hero.id : null;
    /*
     * The router method `navigate()` takes the same one-time link parameters array that you can bind to a [routerLink] directive.
     * As this route parameter are optional the URL notation will be
     * `/tour-of-heroes/heroes;id=15;foo=bar`
     *
     */
    this.router.navigate(['/tour-of-heroes/heroes', { id: heroID, foo: 'bar'}]);
  }
}

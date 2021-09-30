import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import { Crisis } from "../../../../types/interfaces";
import {LoggerService} from "../../../../services/LoggerService";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import {CrisisService} from "../../../services/tour-of-heroes/crisis.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-crisis-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.css"],
  providers: [ LoggerService ]
})
export class CrisisDetailComponent implements OnInit, OnChanges{
  // this property is bound using its original name.
  crisis$!: Observable<Crisis>;
  // this property value is bound to a different property name
  // when this component is instantiated in a template
  @Input("newPropertyName") power = "";

  // Add services as private variables to the constructor so that Angular injects them
  // (them visible to the component)
  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    /* use the ActivatedRoute service to retrieve the parameter for the route, pull the crisis `id` from parameters and retrieve the crisis to display
     * When the map changes, paramMap gets the 'id' parameter from the changed parameters
     * AsyncPipe handle the observable subscription and the component's 'crisis' property will be (re)set with the retrieved crisis.
     */
    this.crisis$ = this.route.paramMap.pipe(
      /* SwitchMap
       * it flattens the Observable<Crisis> that 'CrisisService' returns and cancels previous pending requests.
       * If the user re-navigates to this route with a new id while the CrisisService is still retrieving the old id,
       * switchMap discards that old request and returns the crisis for the new id
       */
      switchMap((params: ParamMap, index ) => {
        return this.crisisService.getCrisis(params.get('id')!)
      })
    )

  }

  ngOnChanges(changes: SimpleChanges){
    for(const propName in changes){
      const chng = changes[propName];
      this.logger.info(`${propName} is equal to:`, chng);
    }
  }

  goToCrises(crisis: Crisis){
    const crisisID = crisis ? crisis.id : null;
    /*
     * The router method `navigate()` takes the same one-time link parameters array that you can bind to a [routerLink] directive.
     * As this route parameter are optional the URL notation will be
     * `/tour-of-heroes/crises;id=15;foo=bar`
     *
     */
    this.router.navigate(['/tour-of-heroes/crises', { id: crisisID, foo: 'bar'}]);
  }
}

/**
 *
 */
import {Component, OnInit} from "@angular/core";
import { Crisis } from "../../../../types/interfaces";
import { CrisisService } from "../../../services/tour-of-heroes/crisis.service";
import {MessageService} from "../../../services/tour-of-heroes/message.service";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

/*
 * The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
 *
 */
@Component({
  /*
   * A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML.
   * For example, if an application's HTML contains <app-crisis-list></app-crisis-list>, then Angular inserts an instance of the CrisisListComponent view between those tags.
   */
  selector: "app-crisis-list",

  /*
   * The module-relative address of this component's HTML template.
   * For inline template use "template" property
   */
  templateUrl: "./crisis-list.component.html",
  styleUrls: ['./crisis-list.component.css'],
  /*
   * An array of providers for services that the component requires.
   *
   */
  providers: [ CrisisService, MessageService ]
})
/*
 * The class interacts with the view through an API of properties and methods
 * The component acquires the crises from a service, which is a TypeScript parameter property on the constructor.
 * The service is provided to the component through the dependency injection system.
 */
export class CrisisListComponent implements OnInit {
  crises$!: Observable<Crisis[]>;
  selectedId: number = 0;

  constructor(
    private crisisService: CrisisService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Subscribe to the crises values
    // Set
    this.getCrises();
  }


  getCrises(): void
  {
    /*
     * The ActivatedRoute.paramMap property is an Observable map of route parameters.
     */
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises();
      })
    );

  }
}

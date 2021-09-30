/**
 *
 */
import {Component, OnInit} from "@angular/core";
import { Hero } from "../../../../types/interfaces";
import { HeroService } from "../../../services/tour-of-heroes/hero.service";
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
   * For example, if an application's HTML contains <app-crisis-list></app-crisis-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
   */
  selector: "app-hero-list",

  /*
   * The module-relative address of this component's HTML template.
   * For inline template use "template" property
   */
  templateUrl: "./hero-list.component.html",
  styleUrls: ['./hero-list.component.css'],
  /*
   * An array of providers for services that the component requires.
   *
   */
  providers: [ HeroService, MessageService ]
})
/*
 * The class interacts with the view through an API of properties and methods
 * The component acquires the heroes from a service, which is a TypeScript parameter property on the constructor.
 * The service is provided to the component through the dependency injection system.
 */
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId: number = 0;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Subscribe to the heroes values
    // Set
    this.getHeroes();
  }


  getHeroes(): void
  {
    /*
     * The ActivatedRoute.paramMap property is an Observable map of route parameters.
     */
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.heroService.getHeroes();
      })
    );

  }
}

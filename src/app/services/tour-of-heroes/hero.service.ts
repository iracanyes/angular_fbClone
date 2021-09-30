import { Injectable } from "@angular/core";
import { Hero } from "../../../types/interfaces";
import { HEROES } from "../../tour-of-heroes/heroes/mock-heroes";
import { MessageService } from "./message.service";
import {Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {
  }



  public getHeroes(): Observable<Hero[]>
  {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  public getHero(id: number|string): Observable<Hero>
  {
    this.messageService.add('HeroService: fetched heroes');
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}

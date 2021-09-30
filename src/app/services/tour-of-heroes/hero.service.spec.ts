/**
 *
 */
import { HeroService } from "./hero.service";
import { HEROES } from "../../tour-of-heroes/heroes/mock-heroes";
import {MessageService} from "./message.service";
import {Hero} from "../../../types/interfaces";
import {of} from "rxjs";
import {toArray} from "rxjs/operators";

describe('HeroService', () => {
  let heroService: HeroService;

  beforeEach(() => {
    const messageService = new MessageService();
    heroService = new HeroService(messageService);
  });

  it('#getHeroes should return Observable array of heroes', () => {
    const expectedHeroes = HEROES;
    const heroes = of(HEROES);

    heroes.pipe().subscribe((heroes) => {
      expect(heroes).toEqual(expectedHeroes)
    });

  });
});

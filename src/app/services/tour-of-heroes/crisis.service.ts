import { Injectable } from "@angular/core";
import { Crisis } from "../../../types/interfaces";
import { CRISES } from "../../tour-of-heroes/crisis-center/mock-crises";
import { MessageService } from "./message.service";
import {Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  constructor(private messageService: MessageService) {
  }



  public getCrises(): Observable<Crisis[]>
  {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }

  public getCrisis(id: number|string): Observable<Crisis>
  {
    this.messageService.add('HeroService: fetched crises');
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)!)
    );
  }
}

import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'toh-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.css']
})
export class CrisisCenterHomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  goBack(crisisID: number){
    // Navigation with a relative path
    // Here: navigate one level up `../`.
    this.router.navigate(
      [
      './',
      { id: crisisID, foo: 'bar'}
    ],
      { relativeTo: this.route }
    );
  }
}

import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {IconService} from "@ant-design/icons-angular";
import { icons } from "../../styles/ant-design-icons";
import {AuthService} from "../../../services/AuthService";
import {User} from "../../../types/interfaces";
import {filter} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {from, of} from "rxjs"

@Component({
  selector: 'app-fb-clone',
  templateUrl: './fb-clone.component.html',
  styleUrls: ['./fb-clone.component.scss']
})
export class FbCloneComponent implements OnInit, OnChanges {

  router: Router;
  authUser : User;

  constructor(
    private __router: Router,
    private __iconService: IconService,
    private __authService: AuthService
  ) {
    this.router = __router;
    this.__iconService.addIcon(...icons);
    this.__iconService.twoToneColor = { primaryColor: '#1890ff' };
    /* Listen to route change
    this.router.events
      .pipe(
        filter(val => val instanceof NavigationEnd)
      )
      .subscribe((event) => {
        console.log('router_events subscribe event', event);
        //@ts-ignore
        if(event.url && event.url === environment.host + '/login'){
          window.location.reload();
        }
      });
    */
    const authObs = of(this.__authService.userData);

    authObs.subscribe(user => {
      console.log('FbCloneComponent Observable this.__authService.userData', user);
      this.authUser = user; // undefined
    });
    let localUserData = localStorage.getItem('user'); // ok
    this.authUser = localUserData !== null ? JSON.parse(localUserData) : null;
    console.log("FbCloneComponent constructor authUser", this.authUser);
    console.log("FbCloneComponent constructor __authService.userData", this.__authService.userData);
  }

  ngOnInit(): void {
    let localUserData = localStorage.getItem('user');
    this.authUser = localUserData !== null ? JSON.parse(localUserData) : null;
    console.log("FbCloneComponent ngOnInit authUser", this.authUser);
    console.log("FbCloneComponent ngOnInit __authService.userData", this.__authService.userData);
  }

  ngOnChanges(changes: SimpleChanges) {
    let localUserData = localStorage.getItem('user');
    this.authUser = localUserData !== null ? JSON.parse(localUserData) : null;
    console.log("FbCloneComponent ngOnChanges authUser", this.authUser);
    console.log("FbCloneComponent ngOnChanges __authService.userData", this.__authService.userData);
  }

}

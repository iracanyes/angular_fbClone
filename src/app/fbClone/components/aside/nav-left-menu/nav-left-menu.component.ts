import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../types/interfaces";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'fb-nav-left-menu',
  templateUrl: './nav-left-menu.component.html',
  styleUrls: ['./nav-left-menu.component.scss']
})
export class NavLeftMenuComponent implements OnInit {

  user: Partial<User> = {
    id: '001',
    username: 'My username',
    avatar: 'https://loremflickr.com/320/240/dog'
  }

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') !== null ? JSON.parse(<string>localStorage.getItem("user")) : null;
  }

}

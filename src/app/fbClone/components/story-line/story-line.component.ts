import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/AuthService";
import {User} from "../../../../types/interfaces";

@Component({
  selector: 'fb-story-line',
  templateUrl: './story-line.component.html',
  styleUrls: ['./story-line.component.scss']
})
export class StoryLineComponent implements OnInit {
  //user: User;

  constructor(
    private authService: AuthService
  ) {
    //this.user = this.authService.getAuthenticatedUser();
  }

  ngOnInit(): void {
  }

}

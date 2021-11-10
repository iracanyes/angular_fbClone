import { Component, OnInit } from '@angular/core';
import {User} from "../../../../types/interfaces";
import {AuthService} from "../../../../services/AuthService";
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {AddPhotoVideoComponent} from "../add-photo-video/add-photo-video.component";

@Component({
  selector: 'fb-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  toggler: number = -1;
  user: User|undefined;

  constructor(
    private __authService: AuthService,
    public dialog: MatDialog
  ) {
    // Get Auth user
    let localUserData = localStorage.getItem('user');
    this.user = localUserData !== null ? JSON.parse(localUserData) : null;

  }

  ngOnInit(): void {
  }

  openDialog(id: number){
    switch(id){
      case 1:
        const dialogRef = this.dialog.open(
          AddPhotoVideoComponent,
          {
            width: '500px',
            data: {
              user: this.user
            }
          }
        );
        break;
      case 2:
        break;
    }
  }

}

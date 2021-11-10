import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Post, User} from "../../../../types/interfaces";
import {SelectPostVisibilityComponent} from "../select-post-visibility/select-post-visibility.component";

interface DialogData {
  user: User
}

@Component({
  selector: 'fb-add-photo-video',
  templateUrl: './add-photo-video.component.html',
  styleUrls: ['./add-photo-video.component.scss']
})
export class AddPhotoVideoComponent implements OnInit {
  user: User|undefined;
  post: Post;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddPhotoVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.user = data.user;
    this.post = {
      title: '',
      message: '',
      files: [],
      filesUrl: [''],
      visibility: 'Public'
    };
  }

  ngOnInit(): void {
  }

  onNoClick(): void
  {
    this.dialogRef.close();
  }

  onFileSelected(e: Event): void
  {
    const input = e.currentTarget as HTMLInputElement;
    if(input?.files?.length ){
      console.log("onFileSelected e.target.files",  input?.files);
    }


  }

  openDialog(): void
  {
    const dialogRef = this.dialog.open(
      SelectPostVisibilityComponent,
      {
        width: '400px',
        data: {
          user: this.user
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if(this.post) this.post.visibility =  result;
    });
  }

}

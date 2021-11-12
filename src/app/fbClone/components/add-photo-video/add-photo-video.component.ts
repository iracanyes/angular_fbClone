import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Post, User} from "../../../../types/interfaces";
import {SelectPostVisibilityComponent} from "../select-post-visibility/select-post-visibility.component";
import {FileUploadService} from "../../../../services/FileUploadService";

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fileUploadService: FileUploadService
  ) {
    this.user = data.user;
    this.post = {
      message: '',
      images: [],
      video: '',
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
    if(input?.files && input?.files?.length > 1 ){
      console.log("onFileSelected e.target.files",  input?.files);
      const files = input.files;

      if(files.length === 1 && (files[0].type.match("/[image|video]\//"))){
       return;
      }

      for(let i=0; i < files.length; i++){
        const file = files.item(i);
        file && console.log(`${ file.name } - ${ file.type }`);
        if(!file?.type.includes('image/')){
          return;
        }

        this.fileUploadService.uploadImage(file);

      }
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

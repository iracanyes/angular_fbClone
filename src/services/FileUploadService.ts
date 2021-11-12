import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import {AuthService} from "./AuthService";
import {User} from "../types/interfaces";
import { v4 as uuidV4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService{
  user: User|undefined;
  constructor(
    private httpClient: HttpClient,
    private afStorage: AngularFireStorage,
    private authService: AuthService
  ) {
    authService.user?.subscribe(result => {
      console.log("FileUploadService authService.user", result);
      this.user = result;
    });
  }

  uploadImage(image: File){
    const imageID = uuidV4();
    console.log("FileUploadService uploadImage user", this.user);
    if(this.user){
      const filePath = `images/${this.user.id}/${imageID}.${image.name.split('/')[image.name.length - 1]}`
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, image, {
        size: file.size,
      });
    }
  }
}

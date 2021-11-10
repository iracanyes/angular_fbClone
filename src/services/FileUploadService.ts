import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService{
  constructor(
    private httpClient: HttpClient
  ) {

  }
}

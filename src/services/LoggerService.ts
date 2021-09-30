import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(message: string, info: any = undefined){
    console.log(message, info);
  }

  warn(message: string, info: any = undefined) {
    console.warn(message, info);
  }
}

import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app/app.component.scss'],
})
export class AppComponent {
  title = 'fbClone';

  constructor() {
  }
}

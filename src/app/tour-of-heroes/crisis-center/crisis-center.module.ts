import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";
import { CrisisCenterComponent } from "./crisis-center.component";


@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
    MatButtonModule
  ]
})
export class CrisisCenterModule { }

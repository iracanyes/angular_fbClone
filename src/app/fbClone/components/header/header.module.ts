import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header.component";
import {RightMenuComponent} from "./right-menu/right-menu.component";
import {CommonModule} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    HeaderComponent,
    RightMenuComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    FontAwesomeModule,
    MatListModule,
    RouterModule,
    MatBadgeModule,
  ]
})
export class HeaderModule {}

import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: []
})
export class FbCloneModule {}

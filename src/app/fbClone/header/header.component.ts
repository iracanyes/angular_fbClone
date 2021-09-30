import { Component } from "@angular/core";

@Component({
  selector: 'fb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string = 'My Username';
}

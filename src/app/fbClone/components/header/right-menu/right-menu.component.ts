import {Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from "@angular/core";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import {faTh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import {AuthService} from "../../../../../services/AuthService";
import {User} from "../../../../../types/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'fb-header-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit, OnChanges{
  @ViewChild('toggleButtonContainer', { read: ElementRef}) toggleButtonContainer!: ElementRef;
  @ViewChild('toggleButton', { read: ElementRef}) toggleButton!: ElementRef;
  @ViewChild('menu', { read: ElementRef}) menu!: ElementRef;

  user: User;
  faMessenger= faFacebookMessenger;
  faHomeTh = faTh;
  faSearch = faSearch;
  toggler = -1;

  // Notifications messages
  notifs = [
    {
      content: "C'est l'anniversaire de .... aujourd'hui.\nSouhaitez-lui une excellente journée",
      date: DateTime.fromISO("2021-10-10T08:30:00").toRelativeCalendar(),
      type: 'Event'
    }
  ]

  constructor(
    private renderer: Renderer2,
    private _authService: AuthService,
    private __router: Router
  ) {
    // Get auth user info or redirect to login
    this.user = localStorage.getItem('user') !== null ? JSON.parse(<string>localStorage.getItem('user')) : null;

    // Listen to click event outside of dialog component
    this.renderer.listen('window', 'click', (e: Event) => {

      if(!e.composedPath().includes(this.toggleButton.nativeElement) && !this.menu.nativeElement.contains(e.target) && !this.toggleButtonContainer.nativeElement.contains(e.target) ){
        this.toggler = -1;
      }
    });

  }

  ngOnInit() {
    this.user === null && this.__router.navigate(['/login']);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.user === null && this.__router.navigate(['/login']);
  }

  toggle(id: number)
  {
    // toggle different card if id diff, or close current opened card
    this.toggler = this.toggler === id ? -1 : id;
  }

  logout(){
    // close card
    this.toggler = -1;
    // sign-out
    this._authService.signOut();
  }
}

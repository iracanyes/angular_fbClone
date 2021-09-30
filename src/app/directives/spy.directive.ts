/**
 *
 */
import {Directive, OnDestroy, OnInit} from "@angular/core";
import {LoggerService} from "../../services/LoggerService";

let nextId = 1;

@Directive({
  // Usage: <div appSpy>...</div>
  selector: "[app-spy]",
  providers: [LoggerService]
})
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    this.logger.info(`Spy #${this.id} onDestroy`);
  }

  ngOnDestroy() {
    this.logger.info(`Spy #${this.id} onDestroy`);
  }
}

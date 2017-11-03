import { Component, OnInit, ViewChild } from '@angular/core';

import { ISession } from '../models/events/event';

import { AuthService } from '../user/auth.service';
import { EventListService } from '../events/event-list/event-list.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[] = [];
  @ViewChild(ModalDirective) public sessionsModal: ModalDirective;

  constructor(
    public _authService: AuthService,
    private _eventListService: EventListService
  ) {}

  ngOnInit() {}

  searchSessions(searchTerm) {
    this._eventListService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions.length);
      if (this.foundSessions.length > 0) {
        this.sessionsModal.show();
      }
    });
  }
}

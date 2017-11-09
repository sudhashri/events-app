import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { ISession } from '../models/events/event';

import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';

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
    private _eventService: EventService
  ) {}

  ngOnInit() {}

  searchSessions(searchTerm) {
    this._eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      if (this.foundSessions.length > 0) {
        this.sessionsModal.show();
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { ISession } from '../models/events/event';
import { EventListService } from '../events/event-list/event-list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchText: string;
  filteredSessions: ISession[] = [];

  constructor(
    public _authService: AuthService,
    private _eventListService: EventListService
  ) {}

  ngOnInit() {}

  searchSessions(searchTerm) {
    this._eventListService.searchSessions(searchTerm).subscribe(sessions => {
      this.filteredSessions = sessions;
      // console.log(this.foundSessions.length);
      // if (this.foundSessions.length > 0) {
      //   this.sessionsModal.show();
      // }
    });
  }
}

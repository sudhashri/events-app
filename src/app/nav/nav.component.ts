import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { ISession } from '../models/events/event';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchText: string;
  filteredSessions: ISession[] = [];

  constructor(public _authService: AuthService) {}

  ngOnInit() {}

  searchSessions(searchText) {}
}

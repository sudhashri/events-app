import { Component, OnInit, Input } from '@angular/core';

import { ISession } from '../../../models/events/event';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {
  @Input() sessions: ISession[];
  oneAtATime = true;

  constructor() {}

  ngOnInit() {}
}

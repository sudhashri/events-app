import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IEvent, ISession } from '../../models/events/event';

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _eventService: EventService
  ) {}

  ngOnInit() {
    this._route.data.forEach((data) => {
      this.resetToDefaults();
      this.event = data['event'];
    });
  }

  private resetToDefaults() {
    this.addMode = false;
    this.filterBy = 'all';
    this.sortBy = 'votes';
  }

  private onBack(): void {
    this._router.navigate(['/events']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}

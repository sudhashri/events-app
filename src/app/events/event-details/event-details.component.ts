import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventListService } from '../event-list/event-list.service';

import { IEvent, ISession } from '../../models/events/event';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _eventListService: EventListService
  ) {}

  ngOnInit() {
    const eventId = +this._route.snapshot.paramMap.get('id');
    this.event = this._eventListService.getEvent(eventId);
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
    this._eventListService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}

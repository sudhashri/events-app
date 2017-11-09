import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { IEvent } from '../../models/events/event';

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private _eventService: EventService,
    private _toastr: ToastsManager
  ) {}

  ngOnInit() {
    this._eventService.getEventsList().subscribe(events => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName: string) {
    this._toastr.info(eventName);
  }
}

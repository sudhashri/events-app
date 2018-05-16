import { Component, OnInit } from '@angular/core';

import { IEvent } from '../../models/events/event';
import { ToastrService } from 'ngx-toastr';

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private _eventService: EventService,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this._eventService.getEventsList().subscribe(events => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName: string) {
    this._toastr.info(eventName);
  }
}

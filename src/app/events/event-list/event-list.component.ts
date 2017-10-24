import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { EventListService } from './event-list.service';

import { IEvent } from '../../models/events/event';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IEvent[];

  constructor(private _eventListService: EventListService, private _toastr: ToastsManager) { }

  ngOnInit() {
    this._eventListService.getEventsList()
      .subscribe(events => { this.events = events; });
  }

  handleThumbnailClick(eventName: string) {
    this._toastr.info(eventName);
  }
}

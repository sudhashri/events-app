import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor(private _eventListService: EventListService, private _toastr: ToastsManager) { }

  ngOnInit() {
    this.events = this._eventListService.getEventsList();
  }

  handleThumbnailClick(eventName: string) {
    this._toastr.info(eventName);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventListService } from '../event-list/event-list.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

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
}

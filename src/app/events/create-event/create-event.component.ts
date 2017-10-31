import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventListService } from '../event-list/event-list.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;

  constructor(
    private _router: Router,
    private _eventListService: EventListService
  ) {}

  ngOnInit() {}

  private onCancel(): void {
    this._router.navigate(['/events']);
  }

  private saveEvent(formValues) {
    this._eventListService.saveEvent(formValues);
    this.isDirty = false;
    this._router.navigate(['/events']);
  }
}

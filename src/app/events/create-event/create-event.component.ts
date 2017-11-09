import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../shared/event.service';
import { log } from 'util';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;

  constructor(private _router: Router, private _eventService: EventService) {}

  ngOnInit() {}

  private onCancel(): void {
    this._router.navigate(['/events']);
  }

  private saveEvent(formValues) {
    if (
      formValues.location.address &&
      formValues.location.city &&
      formValues.location.country
    ) {
      delete formValues['onlineUrl'];
    } else {
      delete formValues['location'];
    }
    this._eventService.saveEvent(formValues).subscribe(event => {
      this.isDirty = false;
      this._router.navigate(['/events']);
    });
  }
}

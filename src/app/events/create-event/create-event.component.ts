import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../shared/event.service';

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
    this._eventService.saveEvent(formValues).subscribe(event => {
      this.isDirty = false;
      this._router.navigate(['/events']);
    });
  }
}

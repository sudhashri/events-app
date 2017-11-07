import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CreateEventComponent } from '../create-event/create-event.component';

@Injectable()
export class CreateRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {
  constructor() { }

  canDeactivate(newEvent: CreateEventComponent) {
    console.log('checkDirtyState called');
    if (newEvent.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    } else {
      return true;
    }
  }
}

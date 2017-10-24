import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { EventListService } from '../event-list/event-list.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
 constructor(
    private _eventService: EventListService,
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this._eventService
      .getEvent(+route.params['id']);
    if (!eventExists) {
      this._router.navigate(['/404']);
    }
    return eventExists;
  }


}

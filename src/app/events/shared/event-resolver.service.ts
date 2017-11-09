import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventResolverService implements Resolve<any> {
  constructor(private _eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._eventService.getEvent(route.params['id']);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateRouteDeactivatorService } from './create-event/create-event-deactivator.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateSessionComponent } from './session/create-session/create-session.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'events/new',
        canDeactivate: [CreateRouteDeactivatorService],
        component: CreateEventComponent
      },
      { path: 'events', component: EventListComponent },
      {
        path: 'events/:id',
        canActivate: [EventRouteActivatorService],
        component: EventDetailsComponent
      },
      {
        path: 'events/session/new',
        component: CreateSessionComponent
      },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: '**', redirectTo: 'events', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class EventsRoutingModule {}

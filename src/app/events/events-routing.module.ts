import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateSessionComponent } from './session/create-session/create-session.component';

import { CreateRouteDeactivatorService } from './shared/create-event-deactivator.service';
import { EventResolverService } from '../events/shared/event-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'events/new',
        canDeactivate: [CreateRouteDeactivatorService],
        component: CreateEventComponent
      },
      {
        path: 'events',
        component: EventListComponent
      },
      {
        path: 'events/:id',
        component: EventDetailsComponent,
        resolve: { event: EventResolverService }
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

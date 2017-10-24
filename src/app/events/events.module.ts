import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventsRoutingModule } from './events-routing.module';

import { EventListService } from './event-list/event-list.service';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { CreateRouteDeactivatorService } from './create-event/create-event-deactivator.service';
import { StringToDate } from './event-thumbnail/convert-to-date.pipe';

@NgModule({
  imports: [CommonModule, EventsRoutingModule],
  declarations: [
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    StringToDate
  ],
  providers: [
    EventListService,
    EventRouteActivatorService,
    CreateRouteDeactivatorService
  ]
})
export class EventsModule {}

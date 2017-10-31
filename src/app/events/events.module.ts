import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CollapseModule  } from 'ngx-bootstrap';

import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventsRoutingModule } from './events-routing.module';

import { EventListService } from './event-list/event-list.service';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { CreateRouteDeactivatorService } from './create-event/create-event-deactivator.service';
import { StringToDate } from './event-thumbnail/convert-to-date.pipe';
import { CreateSessionComponent } from './session/create-session/create-session.component';
import { ListSessionsComponent } from './session/list-sessions/list-sessions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    EventsRoutingModule
  ],
  declarations: [
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    StringToDate,
    CreateSessionComponent,
    ListSessionsComponent
  ],
  providers: [
    EventListService,
    EventRouteActivatorService,
    CreateRouteDeactivatorService
  ]
})
export class EventsModule {}

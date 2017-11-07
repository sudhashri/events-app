import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CollapseModule  } from 'ngx-bootstrap';

import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CreateSessionComponent } from './session/create-session/create-session.component';
import { ListSessionsComponent } from './session/list-sessions/list-sessions.component';

import { EventListService } from './event-list/event-list.service';

import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { CreateRouteDeactivatorService } from './create-event/create-event-deactivator.service';
import { UpvoteComponent } from './session/upvote/upvote.component';
import { VoterService } from './session/upvote/voter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    EventsRoutingModule,
    SharedModule
  ],
  declarations: [
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    ListSessionsComponent,
    UpvoteComponent
  ],
  providers: [
    EventListService,
    EventRouteActivatorService,
    CreateRouteDeactivatorService,
    VoterService
  ]
})
export class EventsModule {}

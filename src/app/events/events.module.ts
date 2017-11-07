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
import { UpvoteComponent } from './shared/upvote/upvote.component';

import { EventService } from './shared/event.service';
import { VoterService } from './shared/voter.service';

import { LocationValidatorDirective } from './shared/location-validator.directive';

import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { CreateRouteDeactivatorService } from './shared/create-event-deactivator.service';

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
    UpvoteComponent,
    LocationValidatorDirective
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    CreateRouteDeactivatorService,
    VoterService
  ]
})
export class EventsModule {}

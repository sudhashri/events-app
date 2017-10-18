import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }

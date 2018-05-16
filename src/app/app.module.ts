import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    UserModule,
    EventsModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

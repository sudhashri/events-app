import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    EventsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

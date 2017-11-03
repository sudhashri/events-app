import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AuthService } from './user/auth.service';
import { JQ_TOKEN } from './shared/jquery.service';

declare let jQuery: Object;

// Customize options globally
export class ToastCustomOptions extends ToastOptions {
  dismiss = 'auto';
  toastLife = 1000;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    EventsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    { provide: ToastOptions, useClass: ToastCustomOptions},
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



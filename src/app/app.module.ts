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
import { ModalTriggerDirective } from './shared/simple-modal/modal-trigger.directive';

// Customize options globally
export class ToastCustomOptions extends ToastOptions {
  dismiss = 'auto';
  toastLife = 1000;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalTriggerDirective
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
    { provide: ToastOptions, useClass: ToastCustomOptions}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



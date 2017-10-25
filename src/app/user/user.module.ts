import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})
export class UserModule {}

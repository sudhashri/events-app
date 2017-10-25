import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { UserRoutingModule } from './user-routing.module';

import { ProfileActivatorService } from './profile/profile-activator.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [ProfileActivatorService]
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { ProfileActivatorService } from './profile/profile-activator.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ProfileActivatorService]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}

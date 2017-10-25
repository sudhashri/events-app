import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileComponent
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

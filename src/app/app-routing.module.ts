import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Error404Component } from './shared/errors/404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '404', component: Error404Component },
      { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

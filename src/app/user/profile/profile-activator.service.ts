import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable()
export class ProfileActivatorService implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const userLoggedIn = this._authService.isAuthenticated();
    if (!userLoggedIn) {
      this._router.navigate(['/user/login']);
    }
    return userLoggedIn;
  }
}

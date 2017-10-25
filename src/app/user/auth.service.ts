import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { IUser } from '../models/user/user';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(public _toastr: ToastsManager) {}

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
    // this._toastr.success('User login completed!');
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    // this._toastr.success('User Profiled updated!');
  }
}

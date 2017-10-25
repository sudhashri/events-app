import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { IUser } from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  user: IUser;
  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit() {}

  private onCancel(): void {
    this._router.navigate(['/events']);
  }

  private login(formValues) {
    this._authService.loginUser(formValues.userName, formValues.password);
  }
}

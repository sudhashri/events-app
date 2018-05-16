import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../app/user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _authService: AuthService, private _toastr: ToastrService) { }

  ngOnInit() {
    this._authService.checkAuthenticationStatus();
    setTimeout(() => this._toastr.success('Event App Started!'));
  }
}

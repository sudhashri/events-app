import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager, Toast, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AuthService } from '../app/user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public _toastr: ToastsManager,
    _vcr: ViewContainerRef,
    private _authService: AuthService
  ) {
    // this._toastr.setupToast(timeOut)
    this._toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this._authService.checkAuthenticationStatus();

    this._toastr.success('App loaded!', 'Success!');

    // Customize options locally
    // this._toastr
    //   .success('App loaded!', 'Success!', { dismiss: 'controlled' })
    //   .then((toast: Toast) => {
    //     setTimeout(() => {
    //       this._toastr.dismissToast(toast);
    //     }, 1000);
    //   });
  }
}

import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public _toastr: ToastsManager, _vcr: ViewContainerRef) {
    this._toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this._toastr.success('App loaded!', 'Success!');
  }
}

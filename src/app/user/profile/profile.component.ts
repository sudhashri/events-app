import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../../models/user/user';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private loggedInUser: IUser;
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.firstName = new FormControl(this._authService.currentUser.firstName, [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.lastName = new FormControl(this._authService.currentUser.lastName, [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  private onCancel(): void {
    this._router.navigate(['events']);
  }

  private saveProfile(profileValues) {
    if (this.profileForm.valid) {
      this._authService.updateCurrentUser(
        profileValues.firstName,
        profileValues.lastName
      );
      this._router.navigate(['events']);
    }
  }

  private validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  private validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { IUser } from '../models/user/user';

@Injectable()
export class AuthService {
  currentUser: IUser;
  private _serverApi = 'http://localhost:8808/api/';

  constructor(private _http: Http, private _toastr: ToastsManager) {}

  loginUser(userName: string, password: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const loginInfo = { username: userName, password: password };
    return this._http
      .post(this._serverApi + 'login', JSON.stringify(loginInfo), options)
      .do(resp => {
        if (resp) {
          this.currentUser = <IUser>resp.json().user;
          this._toastr.success('User login completed!');
        }
      })
      .catch(error => {
        return Observable.of(false);
      });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(
      this._serverApi + `users/${this.currentUser.id}`,
      JSON.stringify(this.currentUser),
      options
    );
  }

  checkAuthenticationStatus() {
    return this._http
      .get(this._serverApi + 'currentIdentity')
      .map((response: any) => {
        console.log(response);
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      })
      .subscribe();
  }

  logout() {
    this.currentUser = undefined;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post(
      this._serverApi + 'logout',
      JSON.stringify({}),
      options
    );
  }
}

import { Injectable } from '@angular/core';

import { ISession } from '../../models/events/event';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoterService {
  private _serverApi = 'http://localhost:8808/api/';

  constructor(private _http: Http) {}

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    this._http
      .delete(this._serverApi + `events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .catch(this.handleError)
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const url =
      this._serverApi +
      `events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this._http
      .post(url, JSON.stringify({}), options)
      .catch(this.handleError)
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError(err: Response) {
    console.error(err.statusText);
    return Observable.throw(err.statusText);
  }
}

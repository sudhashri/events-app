import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Subject, Observable } from 'rxjs/RX';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IEvent, ISession } from '../../models/events/event';

@Injectable()
export class EventService {
  private _serverApi = 'http://localhost:8808/api/';

  constructor(private _http: Http) {}

  getEventsList(): Observable<IEvent[]> {
    return this._http
      .get(this._serverApi + 'events')
      .map((response: Response) => {
        return <IEvent[]>response.json();
      })
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<IEvent> {
    return this._http
      .get(this._serverApi + 'events/' + id)
      .map((response: Response) => {
        return <IEvent>response.json();
      })
      .catch(this.handleError);
  }

  // Method to Save new event or update an existing event
  saveEvent(event: IEvent): Observable<IEvent> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http
      .post(this._serverApi + 'events', event, options)
      .map((respone: Response) => {
        return <IEvent>respone.json();
      })
      .catch(this.handleError);
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this._http
      .get(this._serverApi + 'sessions/search?search=' + searchTerm)
      .map((response: Response) => {
        return <ISession[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(err: Response) {
    console.error(err.statusText);
    return Observable.throw(err.statusText);
  }
}

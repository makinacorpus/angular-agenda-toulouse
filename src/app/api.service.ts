import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Event } from './event'
import { API_URL } from './config';

@Injectable()
export class ApiService {
  private obs: Observable<any>;

  private events: Event[]

  constructor(
    private http: HttpClient
  ) {
    this.obs = new Observable(observer => {
      observer.next(this.events);
    });
  }

  getEvents(): Observable<any> {
    if (!this.events) {
      return this.http.get<any>(API_URL)
        .map(res => {
          this.events = res;
          return this.events;
        })
    } else {
      return this.obs
    }
  }

}

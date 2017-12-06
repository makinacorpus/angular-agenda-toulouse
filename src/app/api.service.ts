import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Event } from './event'
import { API_TOULOUSE_URL, API_BAN_URL } from './config';

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
      return this.http.get<any>(API_TOULOUSE_URL)
        .map(res => {
          this.events = res;
          return this.events;
        })
    } else {
      return this.obs
    }
  }

  getBan(search): Observable<any> {
    return this.http.get<any>(API_BAN_URL + '?q=' + search)
      .map(res => {
        return res;
      })
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.getBan(term).map(res => {
      const cities = res.features.map(feature => feature.properties.city);
      console.log(cities)
      return cities;
    });
  }

}

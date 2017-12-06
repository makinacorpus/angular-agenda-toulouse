import { Component, OnInit } from '@angular/core';

import { EVENTS } from '../../mock-data';
import { Event } from '../../event';
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  events: Event[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getEvents()
      .subscribe(res => {
        this.events = res;
      })
  }

}

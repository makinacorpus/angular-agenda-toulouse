import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getEvents()
      .subscribe(res => {
        this.events = res;
        console.log(this.events)
      })
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() events: Event[];

  constructor() { }

  ngOnInit() {

  }
}

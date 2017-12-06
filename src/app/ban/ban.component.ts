import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {startWith} from 'rxjs/operators/startWith';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
export class BanComponent implements OnInit {

  results: any;

  search: FormControl = new FormControl();
  searchTerm$ = new Subject<string>();
  autocomplete: any;

  constructor(
    private api: ApiService
  ) {
    this.api.search(this.searchTerm$)
    .subscribe(results => {
      console.log(results)
      this.autocomplete = results;
    });
  }

  ngOnInit() {
  }

  submitForm() {
    // console.log(this.search)
    this.api.getBan(this.search.value)
    .subscribe(res => {
      this.results = JSON.stringify(res);
    })
  }
}


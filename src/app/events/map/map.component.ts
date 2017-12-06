import { Component, OnInit, Input } from '@angular/core';
import L from 'leaflet';

import { ApiService } from '../../api.service'
import { Event } from '../../event'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any;
  private markers = [];

  @Input() events: Event[] = [];

  constructor(
    private api: ApiService
  ) { }

  showMarkers() {
    console.log(this.events)
    this.events.forEach((event) => {
      if (event.geometry) {
        L.marker([event.geometry.coordinates[1], event.geometry.coordinates[0]]).addTo(this.map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
      }
    })
  }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.showMarkers()
  }

}

import { Component } from '@angular/core';
import {  AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customer-map-view',
  templateUrl: './customer-map-view.component.html',
  styleUrls: ['./customer-map-view.component.scss']
})


export class CustomerMapViewComponent implements AfterViewInit {
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
    this.marker.setMap(this.map);
  }
}

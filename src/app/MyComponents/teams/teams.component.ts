import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy{
  private map!: L.Map;
  private marker!: L.Marker;
  private circle!: L.Circle;

  geolocationData: GeolocationPosition | null = null;
  private geolocationInterval: any;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
    this.startGeolocationUpdates();
  }

  ngOnDestroy() {
    clearInterval(this.geolocationInterval);
  }

  private initializeMap() {
    this.map = L.map('map').setView([24.59633000, 76.16499000], 10);
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    osm.addTo(this.map);
  }

  private startGeolocationUpdates() {
    if (!navigator.geolocation) {
      console.error("Your browser doesn't support geolocation feature!");
      return;
    }

    this.geolocationInterval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }, 5000);
  }

  private getPosition(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    this.removePreviousMarkers();
    
    this.marker = L.marker([lat, long]);
    this.circle = L.circle([lat, long], { radius: accuracy });

    this.marker.addTo(this.map);
    this.circle.addTo(this.map);

    this.map.setView([lat, long]);
    
    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy);
  }

  private removePreviousMarkers() {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }

    if (this.circle) {
      this.map.removeLayer(this.circle);
    }
  }
}

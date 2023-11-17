import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-teams-tracker',
  templateUrl: './teams-tracker.component.html',
  styleUrls: ['./teams-tracker.component.scss']
})
export class TeamsTrackerComponent implements OnInit {
  private map: any;
  private marker: any;
  private circle: any;
  // private geolocationData: any;

  geolocationData: GeolocationPosition | null = null;
  constructor() { 

   }

  ngOnInit() {
    // Map initialization
    this.map = L.map('map').setView([14.0860746, 100.608406], 6);

    // OSM layer
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    osm.addTo(this.map);

    if (!navigator.geolocation) {
      console.log("Your browser doesn't support geolocation feature!");
    } else {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
      }, 5000);
    }
  }

  getPosition(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const altitude = position.coords.altitude || 'N/A';
    const altitudeAccuracy = position.coords.altitudeAccuracy || 'N/A';
    const heading = position.coords.heading || 'N/A';
    const speed = position.coords.speed || 'N/A';

    if (this.marker) {
      this.map.removeLayer(this.marker);
    }

    if (this.circle) {
      this.map.removeLayer(this.circle);
    }

    this.marker = L.marker([lat, long]);
    this.circle = L.circle([lat, long], { radius: accuracy });

    const featureGroup = L.featureGroup([this.marker, this.circle]).addTo(this.map);

    this.map.fitBounds(featureGroup.getBounds());

    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy);
  }

}

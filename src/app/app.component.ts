import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string;

  // Method to be called on click in
  // the app component header
  // passing a string
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

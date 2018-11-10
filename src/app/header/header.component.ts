import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Emit variable of selected
  @Output() featureSelected = new EventEmitter<string>();

  // method for emitting selected to app
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

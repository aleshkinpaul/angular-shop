import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toggle, ToggleParams } from '../types/toggle'

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() toggles!: Array<Toggle>;
  availableToggles: Array<Toggle> = [];

  @Output() onChange = new EventEmitter<Array<Toggle>>();

  constructor() { }

  ngOnInit(): void {
    this.availableToggles = this.toggles.filter(toggle => toggle.toggleParams.isAvailable);
  }

  onClick(toggle: Toggle){
    if (toggle.toggleParams.label === 'Показать все' 
        && toggle.isActive === false) {
      toggle.isActive = !toggle.isActive;
      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label !== 'Показать все') toggle.isActive = false;
      });
    }
    if (toggle.toggleParams.label !== 'Показать все') {
      let isActiveAvailebleOrSaleToggle = false;
      toggle.isActive = !toggle.isActive;
      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label !== 'Показать все' && toggle.isActive) isActiveAvailebleOrSaleToggle = true;
      });
      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label === 'Показать все') toggle.isActive = !isActiveAvailebleOrSaleToggle;
      });
    }
    this.onChange.emit(this.toggles.filter(toggle => toggle.isActive));
  }
}

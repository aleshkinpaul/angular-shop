import { Component, OnInit, Input, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';
import { ButtonTitles  } from 'src/app/catalog/data/consts'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnInit, OnChanges {
  @Input() color = 'default';
  @Input() size = 'default';
  @Input() isActive = false;
  @Input() isDisabled = false;
  @Input() isAvailableInStorageWithoutSelected = false;
  @Input() buttonTitle = ButtonTitles.ADD_TO_CART;
  
  @Output() addProductToCart = new EventEmitter<boolean>();


  styles = {
     'active': false,
     'default-button': false,
     'primary-button': false,
     'accent-button': false,
     'success-button': false,
     'warning-button': false,
     'large-size-button': false,
     'small-size-button': false,
     'default-size-button': false,
   }

  constructor() { }


  get isDisableValue(): string|null {
    if (this.isDisabled) this.styles.active = false;
    return this.isDisabled ? " " : null;
  }

  ngOnChanges() {
    this.styles['active'] = this.isActive;

    this.styles['default-button'] = this.color === 'default';
    this.styles['primary-button'] = this.color === 'primary';
    this.styles['accent-button'] = this.color === 'accent';
    this.styles['success-button'] = this.color === 'success';
    this.styles['warning-button'] = this.color === 'warning';
    
    this.styles['large-size-button'] = this.size === 'large';
    this.styles['small-size-button'] = this.size === 'small';
    this.styles['default-size-button'] = this.size === 'default';
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  @HostListener('click') onClick(): any {
    this.addProductToCart.emit();
  }
}

import { Component, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() buttonTitle = 'Dropdown Button';
  @Input() event!: string;
  @Input() isOpenMenu!: boolean;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }  

  @HostListener('mouseenter') onMouseEnter(): any {
    if (this.event === 'hover' && !this.isOpenMenu) {
      this.onChange.emit();
    }
  }
  
  @HostListener('click') onClick(): any {
    if (this.event === 'click') {
      this.onChange.emit();
    }
  }
}

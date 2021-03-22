import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title: string = '';
  @Output() clearCart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click') onClick(): any {
    this.clearCart.emit();
  }
}

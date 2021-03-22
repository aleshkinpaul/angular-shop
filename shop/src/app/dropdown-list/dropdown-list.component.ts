import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  isOpen = false;
  trigger = "hover";

  constructor() { }

  ngOnInit(): void {
  }

  get isOpenValue(): string|null {
    return !this.isOpen ? ' ': null;
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }  

  @HostListener('mouseleave') onMouseLeave(): any {
    if (this.trigger === 'hover' && this.isOpen) {
      this.toggleIsOpen();
    }
  }
}

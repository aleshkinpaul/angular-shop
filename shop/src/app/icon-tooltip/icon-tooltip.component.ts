import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  template: `
    <p>
      icon-tooltip works!
      <app-icon></app-icon>
      <app-tooltip></app-tooltip>
    </p>
  `,
  styles: [
  ]
})
export class IconTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bage',
  templateUrl: './bage.component.html',
  styleUrls: ['./bage.component.scss']
})
export class BageComponent implements OnInit {
  @Input() inCartProductCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

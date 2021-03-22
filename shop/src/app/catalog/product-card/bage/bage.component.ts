import { Component, OnInit, Input } from '@angular/core';
import { ProductPrice } from '../../types/card';

@Component({
  selector: 'app-bage',
  templateUrl: './bage.component.html',
  styleUrls: ['./bage.component.scss'],
})
export class BageComponent implements OnInit {
  @Input() price!: ProductPrice;
  
  constructor() { }

  ngOnInit(): void {
  }

}

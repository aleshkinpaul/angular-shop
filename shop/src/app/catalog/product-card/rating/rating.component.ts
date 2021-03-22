import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating?: number;

  constructor() { }

  ngOnInit(): void {
  }

  getRatingArray() {
    let arr = [];
    if (this.rating) {
      for(let i = 1; i <= 5; i++) {
        ( i <= this.rating ) ? arr.push(1) : arr.push(0);
      }
    }
    return arr;
  }
}

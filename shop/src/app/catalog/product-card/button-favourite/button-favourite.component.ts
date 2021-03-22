import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-favourite',
  templateUrl: './button-favourite.component.html',
  styleUrls: ['./button-favourite.component.scss']
})
export class ButtonFavouriteComponent implements OnInit {
  @Input() isFavourite!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}

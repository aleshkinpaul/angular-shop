import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toggle, ToggleParams } from '../types/toggle'
import { ToggleTitles } from '../data/consts'

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() toggles!: Array<Toggle>;
  availableToggles: Array<Toggle> = [];
  routingParams: { [key: string]: string };

  @Output() onChange = new EventEmitter<Array<Toggle>>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.routingParams = route.snapshot.queryParams;
   }

  ngOnInit(): void {
    this.availableToggles = this.toggles.filter(toggle => toggle.toggleParams.isAvailable);
    if (Object.keys(this.routingParams).length === 0) {
      this.router.navigateByUrl('/products');
    } else if (JSON.parse(this.routingParams.isShowAll)
          && ( JSON.parse(this.routingParams.isAvailable)
            || JSON.parse(this.routingParams.isDicsount))
    ) { 
      this.router.navigateByUrl('/404');
    } else {
      this.availableToggles.map(x => {
        if (x.toggleParams.label === ToggleTitles.SHOW_ALL_ITEMS) x.isActive = JSON.parse(this.routingParams.isShowAll);
        if (x.toggleParams.label === ToggleTitles.AVAILABLE_ITEMS) x.isActive = JSON.parse(this.routingParams.isAvailable);
        if (x.toggleParams.label === ToggleTitles.DISCOUNT_ITEMS) x.isActive = JSON.parse(this.routingParams.isDicsount);
      })
      this.onChange.emit(this.toggles.filter(toggle => toggle.isActive));
    }
  }

  onClick(toggle: Toggle){
    if (toggle.toggleParams.label === ToggleTitles.SHOW_ALL_ITEMS 
        && toggle.isActive === false) {
      toggle.isActive = !toggle.isActive;
      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label !== ToggleTitles.SHOW_ALL_ITEMS) toggle.isActive = false;
      });
    }
    if (toggle.toggleParams.label !== ToggleTitles.SHOW_ALL_ITEMS) {
      let isActiveAvailebleOrSaleToggle = false;
      toggle.isActive = !toggle.isActive;

      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label !== ToggleTitles.SHOW_ALL_ITEMS && toggle.isActive) isActiveAvailebleOrSaleToggle = true;
      });
      
      this.toggles.forEach(toggle => {
        if (toggle.toggleParams.label === ToggleTitles.SHOW_ALL_ITEMS) toggle.isActive = !isActiveAvailebleOrSaleToggle;
      });
    }

    const isShowAllActive = this.availableToggles.find(x => x.toggleParams.label === ToggleTitles.SHOW_ALL_ITEMS)?.isActive;
    const isAvailableInStorageActive = this.availableToggles.find(x => x.toggleParams.label === ToggleTitles.AVAILABLE_ITEMS)?.isActive;
    const isDicsountActive = this.availableToggles.find(x => x.toggleParams.label === ToggleTitles.DISCOUNT_ITEMS)?.isActive;

    this.router.navigate(['.'], { 
      relativeTo: this.route,
      queryParams: { isDicsount: isDicsountActive, isAvailable: isAvailableInStorageActive, isShowAll: isShowAllActive }
    });

    this.onChange.emit(this.toggles.filter(toggle => toggle.isActive));
  }
}

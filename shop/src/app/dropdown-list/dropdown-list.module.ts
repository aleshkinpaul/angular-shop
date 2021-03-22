import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownListComponent } from './dropdown-list.component';
import { ButtonModule } from './button/button.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [DropdownListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [DropdownListComponent],
})
export class DropdownListModule { }

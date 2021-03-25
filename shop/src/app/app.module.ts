import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownListModule } from './dropdown-list/dropdown-list.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { CatalogModule } from './catalog/catalog.module';
import { ProductModule } from './product/product.module';
import { Page404Module } from './page404/page404.module';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DropdownListModule,
    IconTooltipModule,
    CatalogModule,
    ProductModule,
    Page404Module,
    AppRoutingModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru' // 'de' for Germany, 'fr' for France ...
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

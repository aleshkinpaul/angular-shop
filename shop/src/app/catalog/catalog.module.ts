import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardModule } from './product-card/product-card.module';
import { ToggleModule } from './toggle/toggle.module';
import { CartModule } from './cart/cart.module';
import { CatalogComponent } from './catalog.component';
import { Route, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { RoutingComponent } from './routing.component';

const routes: Route[] = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      {
        path: 'products',
        component: CatalogComponent,
      },
      {
        path: 'products/:id',
        component: ProductComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [CatalogComponent, ProductComponent, RoutingComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductCardModule,
    ToggleModule,
    CartModule,
    RouterModule.forChild(routes),
  ],
  exports: [CatalogComponent, ProductComponent, RoutingComponent],
})
export class CatalogModule {}

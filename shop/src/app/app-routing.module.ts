import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from './catalog/catalog.component'
import { Page404Component } from './page404/page404.component'
import { ProductComponent } from './product/product.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: CatalogComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

export const options: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

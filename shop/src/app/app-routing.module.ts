import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const options: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

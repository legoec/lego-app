import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorPage } from './vendor.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../shared-pages/categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: 'agreements',
        loadChildren: () => import('./pages/agreements/agreements.module').then( m => m.AgreementsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../shared-pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/vendor/services',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPageRoutingModule {}

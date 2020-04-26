import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../shared-pages/categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../shared-pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'register-vendor',
        loadChildren: () => import('./register-vendor/register-vendor.module').then(m => m.RegisterVendorModule)
      },
      {
        path: '',
        redirectTo: '/client/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/client/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule {}

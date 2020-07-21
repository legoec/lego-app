import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('../shared-pages/categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../shared-pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../shared-pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/client/categories',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/client/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule {}

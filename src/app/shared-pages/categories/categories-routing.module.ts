import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';
import { NewCategoryComponent } from './new-category/new-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ServicesPageComponent } from '../services/services.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },
  {
    path: 'new',
    component: NewCategoryComponent
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent
  },
  {
    path: ':id/services',
    component: ServicesPageComponent
  },
  {
    path: 'services',
    loadChildren: () => import('../../shared-pages/service/service.module').then(m => m.ServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}

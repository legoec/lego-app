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
    path: 'categories/:id/services',
    component: ServicesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}

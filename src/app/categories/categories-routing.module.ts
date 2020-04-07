import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';
import { NewCategoryComponent } from '../admin/new-category/new-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },
  {
    path: 'new',
    component: NewCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}

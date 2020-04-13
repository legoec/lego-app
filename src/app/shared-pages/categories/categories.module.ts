import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';

import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesPage } from './categories.page';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule,
  CategoriesPageRoutingModule,
  SharedModule
];

const components = [
  CategoriesPage,
  NewCategoryComponent,
  CategoryFormComponent,
  EditCategoryComponent
];

@NgModule({
  imports: modules,
  declarations: [...components]
})
export class CategoriesPageModule {}

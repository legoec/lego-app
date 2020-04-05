import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';

import { CategoriesService } from './services/categories.service';

const modules = [
    CommonModule,
    FormsModule,
    IonicModule
];

const components = [
    CategoriesComponent,
    CategoryComponent
];

const providers = [
    CategoriesService
];

@NgModule({
 imports: modules,
 declarations: components,
 exports:      [
     ...modules,
     ...components
 ],
 providers
})
export class SharedModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';

import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

const modules = [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
];

const components = [
    CategoriesComponent,
    CategoryComponent,
    ControlMessagesComponent
];

const providers = [
    CategoriesService,
    AuthService
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

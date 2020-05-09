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
import { VendorsComponent } from './vendors/vendors.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorRequestService } from './services/vendor_request';
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';

const modules = [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
];

const components = [
    CategoriesComponent,
    CategoryComponent,
    ControlMessagesComponent,
    VendorsComponent,
    VendorComponent,
    ModalFeedbackComponent
];

const providers = [
    CategoriesService,
    VendorRequestService,
    AuthService
];

@NgModule({
 imports: modules,
 declarations: components,
 exports:      [
     ...modules,
     ...components
 ],
 providers,
 entryComponents: [
     ModalFeedbackComponent
    ]
})
export class SharedModule { }

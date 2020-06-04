import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditVendorProfilePageRoutingModule } from './edit-vendor-profile-routing.module';
import { RegisterVendorModule } from '../../../client/register-vendor/register-vendor.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { EditVendorProfilePage } from './edit-vendor-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVendorProfilePageRoutingModule,
    RegisterVendorModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [EditVendorProfilePage]
})
export class EditVendorProfilePageModule {}

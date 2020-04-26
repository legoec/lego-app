import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RegisterVendorRoutingModule } from './register-vendor-routing.module';
import { RegisterVendorComponent } from './register-vendor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RegisterVendorRoutingModule
  ],
  declarations: [RegisterVendorComponent]
})
export class RegisterVendorModule {}

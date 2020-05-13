import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailsPageRoutingModule } from './service-details-routing.module';

import { ServiceDetailsPage } from './service-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendorActivityService } from 'src/app/shared/services/vendor_activity.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ServiceDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ServiceDetailsPage],
  providers: [VendorActivityService]
})
export class ServiceDetailsPageModule {}

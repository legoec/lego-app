import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailsPageRoutingModule } from './service-details-routing.module';

import { ServiceDetailsPage } from './service-details.page';
import { VendorActivityService } from 'src/app/shared/services/vendor_activity.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDetailsPageRoutingModule
  ],
  declarations: [ServiceDetailsPage],
  providers: [VendorActivityService]
})
export class ServiceDetailsPageModule {}

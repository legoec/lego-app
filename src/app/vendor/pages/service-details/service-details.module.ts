import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailsPageRoutingModule } from './service-details-routing.module';

import { ServiceDetailsPage } from './service-details.page';
import { ServicesService } from 'src/app/shared/services/services.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDetailsPageRoutingModule
  ],
  declarations: [ServiceDetailsPage],
  providers: [ServicesService]
})
export class ServiceDetailsPageModule {}

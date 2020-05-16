import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';
import { SharedModule } from 'src/app/shared/shared.module';


const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  ServicePageRoutingModule,
  SharedModule,
  BarRatingModule
];

const components = [
  ServicePage,
];

@NgModule({
  imports: modules,
  declarations: [...components]
})
export class ServicePageModule {}

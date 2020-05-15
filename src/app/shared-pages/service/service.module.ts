import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';
import { SharedModule } from 'src/app/shared/shared.module';


const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  ServicePageRoutingModule,
  SharedModule
];

const components = [
  ServicePage,
];

@NgModule({
  imports: modules,
  declarations: [...components]
})
export class ServicePageModule {}

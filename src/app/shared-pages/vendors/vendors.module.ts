import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsPageRoutingModule } from './vendors-routing.module';

import { VendorsPage } from './vendors.page';
import { SharedModule } from 'src/app/shared/shared.module';


const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  VendorsPageRoutingModule,
  SharedModule
];

const components = [
  VendorsPage,
];

@NgModule({
  imports: modules,
  declarations: [...components]
})
export class VendorsPageModule {}

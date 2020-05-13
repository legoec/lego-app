import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewServicePageRoutingModule } from './new-service-routing.module';

import { NewServicePage } from './new-service.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewServicePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    NewServicePage
  ]
})
export class NewServicePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditServicePageRoutingModule } from './edit-service-routing.module';

import { EditServicePage } from './edit-service.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditServicePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    EditServicePage
  ]
})
export class EditServicePageModule {}

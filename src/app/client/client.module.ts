import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ClientPageRoutingModule
  ],
  declarations: [ClientPage]
})
export class ClientPageModule {}

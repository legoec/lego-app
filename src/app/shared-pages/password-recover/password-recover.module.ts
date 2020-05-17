import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordRecoverPageRoutingModule } from './password-recover-routing.module';

import { PasswordRecoverPage } from './password-recover.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordRecoverPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [PasswordRecoverPage]
})
export class PasswordRecoverPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditVendorProfilePage } from './edit-vendor-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditVendorProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditVendorProfilePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVendorComponent } from './register-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterVendorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterVendorRoutingModule {}

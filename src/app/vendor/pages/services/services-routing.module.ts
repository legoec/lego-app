import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPage } from './services.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage
  },
  {
    path: 'new-service',
    loadChildren: () => import('../service-details/service-details.module').then( m => m.ServiceDetailsPageModule)
  },
  {
    path: 'edit-service/:serviceId',
    loadChildren: () => import('../service-details/service-details.module').then( m => m.ServiceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}

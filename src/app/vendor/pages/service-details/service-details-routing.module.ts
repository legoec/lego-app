import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDetailsPage } from './service-details.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceDetailsPage
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../../../shared-pages/services/edit-service/edit-service.module').then( m => m.EditServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDetailsPageRoutingModule {}

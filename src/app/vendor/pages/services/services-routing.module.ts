import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPage } from './services.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage
  },
  {
    path: 'new',
    loadChildren: () => import('../../../shared-pages/services/new-service/new-service.module').then( m => m.NewServicePageModule)
  },
  {
    path: 'service/:id',
    loadChildren: () => import('../service-details/service-details.module').then(m => m.ServiceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}

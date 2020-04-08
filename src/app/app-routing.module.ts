import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin/admin.guard';
import { VendorGuard } from './guards/vendor/vendor.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'client', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule),
    canActivate: [VendorGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

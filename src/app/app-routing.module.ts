import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin/admin.guard';
import { VendorGuard } from './guards/vendor/vendor.guard';
import { OpenGuard } from './guards/open/open.guard';
import { ClientGuard } from './guards/client/client.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'client', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./shared-pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [OpenGuard]
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule),
    canActivate: [ClientGuard]
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
  },
  {
    path: 'register',
    loadChildren: () => import('./shared-pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [OpenGuard]
  },
  {
    path: 'password-recover',
    loadChildren: () => import('./shared-pages/password-recover/password-recover.module').then( m => m.PasswordRecoverPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./shared-pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

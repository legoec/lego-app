import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { map } from 'rxjs/operators';
import { VendorService } from 'src/app/shared/services/vendor.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private vendorService: VendorService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.getAuthenticadUser().pipe(
        map(user => {
          if (user) {
            if (user.admin) {
              return this.router.parseUrl('admin');
            }
            this.vendorService.clearVendorRequest();
          }
          return true;
        })
      );
  }
}

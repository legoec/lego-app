import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { map } from 'rxjs/operators';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { EVendorRequestStatus } from 'src/app/models/vendor-request';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private vendorService: VendorService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return combineLatest(this.authService.getAuthenticadUser(), this.vendorService.getVendorRequest()).pipe(
        map(([user, vendorRequest]) => {
          return !!user && !!vendorRequest && vendorRequest.status === EVendorRequestStatus.APPROVED || this.router.parseUrl('');
        })
      );
  }
}

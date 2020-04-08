import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const promise: Promise<User | boolean> = new Promise((resolve, reject) => {
        this.authService.getAuthenticadUser().subscribe(
          (user) =>  resolve(user),
          () =>  reject(false)
        );
      });
      return promise.then((user) => this.redirect(user)).catch(() => this.redirect({}));
  }

  redirect(userData): boolean {
    const currentUser: User = userData;
    const isVendor = currentUser && currentUser.isVendor;
    if (!isVendor) {
      this.router.navigateByUrl('');
    }
    return isVendor;
  }
}

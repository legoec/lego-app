import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { VendorRequest } from 'src/app/models/vendor-request';
import { VendorService } from 'src/app/shared/services/vendor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<User> = this.authService.getAuthenticadUser();
  vendor$: Observable<VendorRequest> = this.vendorService.getVendorRequest();

  constructor(
    private authService: AuthService,
    private vendorService: VendorService
  ) { }

  ngOnInit() {
  }

  onLogout = () => this.authService.logOutUser();

}

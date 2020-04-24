import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-vendors-page',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {
  isAdmin: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuthenticadUser().subscribe((user) => {
      this.isAdmin = user && user.admin;
    });
  }

}

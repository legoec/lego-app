import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../shared/services/auth.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: AngularTokenService
  ) { }

  ngOnInit() {
    this.authService.getAuthenticadUser().subscribe((user) => this.userInfo = user);
  }

  onLogin = () => this.router.navigate(['/login']);

  onLogout() {
    this.tokenService.signOut().subscribe(resp => {
      if (resp.success) {
        this.authService.resetUserStore();
        this.router.navigateByUrl('');
      }
    });
  }

}

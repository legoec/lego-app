import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
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

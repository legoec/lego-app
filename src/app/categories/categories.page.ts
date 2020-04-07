import { Component, AfterContentChecked } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements AfterContentChecked {
  isAdmin: boolean;

  constructor(
    private tokenService: AngularTokenService
  ) {
    this.tokenService.validateToken();
  }

  ngAfterContentChecked() {
    const dataUser: any = this.tokenService.currentUserData;
    this.isAdmin = dataUser ? dataUser.admin : false;
  }

}

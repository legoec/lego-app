import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, getAuthenticatedUser } from '../store/app.states';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  isAdmin: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(getAuthenticatedUser).subscribe((user) => {
      this.isAdmin = user && user.admin;
    });
  }

}

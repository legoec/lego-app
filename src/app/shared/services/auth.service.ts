import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAuthenticatedUser, getAuthError } from 'src/app/store/app.states';
import { filter } from 'rxjs/operators';
import { LogIn, LogOut, SignIn, } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<AppState>
  ) { }

  startAuthenticationUser(payload): void {
    this.store.dispatch(new LogIn(payload));
  }

  getAuthenticadUser(): Observable<User> {
    return this.store.select(getAuthenticatedUser);
  }

  getAuthError(): Observable<string> {
    return this.store.select(getAuthError).pipe(
      filter(errorMessage => !!errorMessage)
    );
  }

  logOutUser(): void {
    this.store.dispatch(new LogOut());
  }

  signIn(payload): void {
    this.store.dispatch(new SignIn(payload));
  }
}

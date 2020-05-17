import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AppState,
  getAuthenticatedUser,
  getAuthError,
  getSignUpError,
  getIsAuthenticated
} from 'src/app/store/app.states';
import { filter } from 'rxjs/operators';
import { LogIn, LogOut, SignIn, } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  startAuthenticationUser(payload): void {
    this.store.dispatch(new LogIn(payload));
  }

  getAuthenticadUser(): Observable<User> {
    return this.store.select(getAuthenticatedUser);
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(getIsAuthenticated);
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

  getSignUpError(): Observable<{}> {
    return this.store.select(getSignUpError).pipe(
      filter(errorMessage => !!errorMessage)
    );
  }

  resetPassword(email: string) {
    const params = {
      email,
      redirect_url: 'http://localhost:4200/reset_password'
    };
    return this.http.post(`${environment.apiBase}/v0/auth/password`, params);
  }
}

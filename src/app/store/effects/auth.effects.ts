import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { AngularTokenService } from 'angular-token';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure, LogOutSuccess, LogOutFailure,
} from '../actions/auth.actions';
import { User } from 'src/app/models/user';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AngularTokenService,
    private router: Router,
  ) { }

  LogIn: Observable<any> = createEffect(() => this.actions
    .pipe(ofType(AuthActionTypes.LOGIN),
      map((action: LogIn) => action.payload),
      switchMap(payload =>
        this.authService.signIn(payload).pipe(
          map(({body: {data}}) => {
            return new LogInSuccess({ user: data });
          }),
          catchError(({error: {errors}}) => {
            return of(new LogInFailure({ errors }));
          })
        )
      )
    ));

  LogInSuccess: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(({ payload: { user } }) => {
      const userData: User = user;
      if (userData.admin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/client']);
      }
    })
  ), { dispatch: false });

  LogInFailure: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)),
    { dispatch: false }
  );

  LogOut: Observable<any> = createEffect(() => this.actions
    .pipe(ofType(AuthActionTypes.LOGOUT),
      switchMap(() =>
        this.authService.signOut().pipe(
          map(() => {
            return new LogOutSuccess();
          }),
          catchError(({error: {errors}}) => {
            return of(new LogOutFailure({ errors }));
          })
        )
      )
    ));

  LogOutSuccess: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT_SUCCESS),
    tap(() => this.router.navigate(['']))
  ), { dispatch: false });

  LogOutFailure: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT_FAILURE)),
    { dispatch: false }
  );
}

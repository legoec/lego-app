import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SET_USER = '[Auth] Set User',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
  SIGNIN = '[Auth] Signin',
  SIGNIN_FAILURE = '[Auth] Signin Failure'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class SetUser implements Action {
  readonly type = AuthActionTypes.SET_USER;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}

export class LogOutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor() {}
}

export class LogOutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) {}
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGNIN;
  constructor(public payload: any) {}
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SIGNIN_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SetUser
  | LogOut
  | LogOutSuccess
  | LogOutFailure
  | SignIn
  | SignInFailure;

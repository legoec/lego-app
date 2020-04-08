
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';


export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<auth.State>('auth');

export const getAuthenticatedUser = createSelector(
  selectAuthState,
  state => state.user,
);

export const getAuthError = createSelector(
  selectAuthState,
  state => state.errorMessage,
);

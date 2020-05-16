
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';
import * as vendor from './reducers/vendor.reducers';


export interface AppState {
  authState: auth.State;
  vendorState: vendor.State;
}

export const reducers = {
  auth: auth.reducer,
  vendor: vendor.reducer
};

export const selectAuthState = createFeatureSelector<auth.State>('auth');
export const selectVendorState = createFeatureSelector<vendor.State>('vendor');

export const getAuthenticatedUser = createSelector(
  selectAuthState,
  state => state.user,
);

export const getIsAuthenticated = createSelector(
  selectAuthState,
  state => state.isAuthenticated,
);

export const getAuthenticatedUserId = createSelector(
  selectAuthState,
  state => state.user.id,
);

export const getAuthError = createSelector(
  selectAuthState,
  state => state.errorMessageLogin,
);

export const getSignUpError = createSelector(
  selectAuthState,
  state => state.errorMessageSignUp,
);

export const getVendorRequest = createSelector(
  selectVendorState,
  state => state.vendorRequest,
);

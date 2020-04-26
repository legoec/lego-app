import { Action } from '@ngrx/store';

export enum VendorActionTypes {
  SET_VENDOR_REQUEST = '[Vendor] Set vendor request',
  SET_VENDOR = '[Vendor] Set vendor',
  CLEAR_VENDOR = '[Vendor] Clear vendor'
}

export class SetVendorRequest implements Action {
  readonly type = VendorActionTypes.SET_VENDOR_REQUEST;
  constructor() {}
}

export class SetVendor implements Action {
  readonly type = VendorActionTypes.SET_VENDOR;
  constructor(public payload: any) {}
}

export class ClearVendor implements Action {
  readonly type = VendorActionTypes.CLEAR_VENDOR;
  constructor() {}
}

export type All =
  | SetVendorRequest
  | SetVendor
  | ClearVendor;

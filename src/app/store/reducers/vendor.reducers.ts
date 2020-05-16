import { VendorActionTypes, All } from '../actions/vendor.actions';
import { VendorRequest } from 'src/app/models/vendor-request';

export interface State {
  vendorRequest: VendorRequest | null;
}

export const initialState: State = {
  vendorRequest: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case VendorActionTypes.SET_VENDOR_REQUEST: {
      return {
        ...state,
        vendorRequest: null
      };
    }
    case VendorActionTypes.SET_VENDOR: {
      return {
        ...state,
        vendorRequest: action.payload.vendorRequest
      };
    }
    case VendorActionTypes.CLEAR_VENDOR: {
      return {
        ...state,
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
}

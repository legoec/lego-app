import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessageLogin: string | null;
  errorMessageSignUp: {} | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessageLogin: null,
  errorMessageSignUp: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        isAuthenticated: undefined,
        user: null,
        errorMessageLogin: null
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        errorMessageLogin: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessageLogin: action.payload.errors.join(', ')
      };
    }
    case AuthActionTypes.SET_USER: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        errorMessageLogin: null
      };
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        ...initialState
      };
    }
    case AuthActionTypes.SIGNIN_FAILURE: {
      return {
        ...state,
        errorMessageSignUp: action.payload.errors
      };
    }
    case AuthActionTypes.UPDATE_USER: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    default: {
      return state;
    }
  }
}

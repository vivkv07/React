import {
  AuthActionValueType,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from '../actions';
import { AuthState } from './type';

const initialState: AuthState = {
  isAuthenticating: false,
  user: null,
};

export const auth = (state: AuthState = initialState,
                     action: AuthActionValueType): AuthState => {

  if (!action) {
    return state;
  }

  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.user,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.user,
      };
    default:
      return state;
  }
};

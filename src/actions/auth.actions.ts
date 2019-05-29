import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  AuthActionValueType,
} from './type';
import { User } from '@src/core/model';

export const signIn = (): AuthActionValueType => ({
  type: SIGN_IN,
});

export const signInSuccess = (user: User): AuthActionValueType => ({
  type: SIGN_IN_SUCCESS,
  user: user,
});

export const singUp = (): AuthActionValueType => ({
  type: SIGN_UP,
});

export const singUpSuccess = (user: User): AuthActionValueType => ({
  type: SIGN_UP,
  user: user,
});

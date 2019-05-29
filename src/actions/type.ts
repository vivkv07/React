import {
  ThemeEnum,
  User,
} from '@src/core/model';

export interface ActionValueType {
  type: string;
}

export interface ToggleThemeActionValueType extends ActionValueType {
  payload: ThemeEnum;
}

export interface AuthActionValueType extends ActionValueType {
  user?: User;
}

export const TOGGLE_THEME: string = 'TOGGLE_THEME';

export const SIGN_IN: string = 'SIGN_IN';
export const SIGN_IN_SUCCESS: string = 'SIGN_IN_SUCCESS';
export const SIGN_UP: string = 'SIGN_UP';
export const SIGN_UP_SUCCESS: string = 'SIGN_UP_SUCCESS';

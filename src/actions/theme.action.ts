import { ThemeEnum } from '@src/core/model';
import {
  TOGGLE_THEME,
  ToggleThemeActionValueType,
} from './type';

export const toggleTheme = (theme: ThemeEnum): ToggleThemeActionValueType => ({
  type: TOGGLE_THEME,
  payload: theme,
});

import { ThemeEnum } from '@src/core/model';
import { TOGGLE_THEME } from './type';

export const toggleTheme = (theme: ThemeEnum) => ({
  type: TOGGLE_THEME,
  payload: theme,
});

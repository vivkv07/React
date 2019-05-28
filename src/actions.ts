import { ThemeEnum } from '@src/core/model';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = (theme: ThemeEnum) => ({
  type: TOGGLE_THEME,
  payload: theme,
});

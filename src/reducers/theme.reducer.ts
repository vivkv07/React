import {
  TOGGLE_THEME,
  ToggleThemeActionValueType,
} from '../actions';
import { ThemeEnum } from '../core/model';

export const theme = (state = ThemeEnum['Eva Light'],
                      action: ToggleThemeActionValueType): ThemeEnum => {

  if (action.type === TOGGLE_THEME) {
    if (action.payload === 'Eva Light') {
      return ThemeEnum['Eva Light'];
    } else if (action.payload === 'Eva Dark') {
      return ThemeEnum['Eva Dark'];
    }
    return state;
  } else {
    return state;
  }
};


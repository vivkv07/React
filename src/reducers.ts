import { combineReducers } from 'redux';
import { TOGGLE_THEME } from './actions';
import { ThemeEnum } from '@src/core/model';

const theme = (state = ThemeEnum['Eva Light'], action): ThemeEnum => {
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

export const reducers = combineReducers({
  theme,
});

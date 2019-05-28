import { combineReducers } from 'redux';
import { ThemeKeyTest, THEMES, Themes } from './themes';
import { TOGGLE_THEME } from './actions';

const theme = (state = Themes['Eva Light'], action) => {
  if (action.type === TOGGLE_THEME) {
    if (action.payload === 'Eva Light') {
      return Themes['Eva Light'];
    } else if (action.payload === 'Eva Dark') {
      return Themes['Eva Dark'];
    }
    return state;
  } else {
    return state;
  }
};

export const reducers = combineReducers({
  theme,
});

import { combineReducers } from 'redux';
import { theme } from './theme.reducer';
import { auth } from './auth.reducer';

export * from './type';

export const reducers = combineReducers({
  theme,
  auth,
});

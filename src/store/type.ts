import { AuthState } from '@src/reducers';
import { ThemeEnum } from '@src/core/model';

export interface GlobalState {
  auth?: AuthState;
  theme?: ThemeEnum;
}

import { ThemeEnum } from './theme.enum';

export interface GlobalState {
  theme?: ThemeEnum;
  toggleTheme?: (themeName: ThemeEnum) => void;
}

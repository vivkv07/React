import {
  dark,
  light,
} from '@eva-design/eva';
import { ThemeType } from '@kitten/theme';

interface ThemeRegistry {
  ['Eva Light']: ThemeType;
  ['Eva Dark']: ThemeType;
}

export const themes: ThemeRegistry = {
  'Eva Light': light,
  'Eva Dark': dark,
};

export { ThemeService } from './theme.service';

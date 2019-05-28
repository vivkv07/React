import {
  dark,
  light,
} from '@eva/themes';
import { ThemeType } from '@kitten/theme';

interface ThemeRegistryTest {
  ['Eva Light']: ThemeType;
  ['Eva Dark']: ThemeType;
}

export enum Themes {
  'Eva Light' = 'Eva Light',
  'Eva Dark' = 'Eva Dark',
}

export type ThemeKeyTest = keyof ThemeRegistryTest;

export const THEMES: ThemeRegistryTest = {
  'Eva Light': light,
  'Eva Dark': dark,
};

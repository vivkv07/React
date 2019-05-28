import { store } from '../../store';
import { ThemeEnum } from '@src/core/model';

export class ThemeService {

  public static select = <T>(config: { [key in ThemeEnum | 'default']?: T }): T | null => {

    const currentTheme: ThemeEnum = store.getState().theme;

    if (config[currentTheme]) {
      return config[currentTheme];
    } else if (config.default) {
      return config.default;
    } else {
      return null;
    }
  };

}

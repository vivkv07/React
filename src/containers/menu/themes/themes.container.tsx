import React from 'react';
import { Themes } from './themes.component';
import { themes } from '@src/core/themes';
import { Theme } from './type';
import { toggleTheme } from '../../../actions';
import { connect } from 'react-redux';
import {
  GlobalState,
  ThemeEnum,
} from '@src/core/model';

const mapStateToProps = (state: GlobalState) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleTheme: (theme: ThemeEnum) => dispatch(toggleTheme(theme)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class ThemesContainer extends React.Component<GlobalState> {

  private data: Theme[] = [];

  constructor(props) {
    super(props);
    this.data = Object.keys(themes).map(this.toThemeObject);
  }

  private toThemeObject = (theme: string): Theme => {
    return { name: theme, theme: themes[theme] };
  };

  public render(): React.ReactNode {
    return (
      <Themes
        data={this.data}
        currentTheme={this.props.theme}
        onToggleTheme={this.props.toggleTheme}
      />
    );
  }
}

import React from 'react';
import { Themes } from './themes.component';
import {
  ContextType,
  ThemeContext,
  themes,
} from '@src/core/themes';
import { Theme } from './type';
import { toggleTheme } from '../../../actions';
import { connect } from 'react-redux';

export class ThemesContainerComponent extends React.Component {

  private data: Theme[] = [];

  constructor(props) {
    super(props);
    this.data = Object.keys(themes).map(this.toThemeObject);
  }

  private toThemeObject = (theme: string): Theme => {
    return { name: theme, theme: themes[theme] };
  };

  private renderContent = (context: ContextType): React.ReactElement<any> => {
    return (
      <Themes
        data={this.data}
        currentTheme={context.currentTheme}
        onToggleTheme={this.props.toggleTheme}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <ThemeContext.Consumer>
        {this.renderContent}
      </ThemeContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: theme => dispatch(toggleTheme(theme)),
});

export const ThemesContainer = connect(mapStateToProps, mapDispatchToProps)(ThemesContainerComponent);

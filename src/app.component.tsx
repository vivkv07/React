import React from 'react';
import { ImageRequireSource } from 'react-native';
import { NavigationState } from 'react-navigation';
import { Font } from 'expo';
import { default as mapping } from '@eva/eva';
import { ApplicationProvider } from '@kitten/theme';
import { DynamicStatusBar } from '@src/components/common';
import {
  ApplicationLoader,
  Assets,
} from './core/appLoader/applicationLoader.component';
import { Router } from './core/navigation/routes';
import { trackScreenTransition } from './core/utils/analytics';
import { getCurrentStateName } from './core/navigation/routeUtil';
import {
  ContextType,
  ThemeContext,
  ThemeKey,
  themes,
  ThemeStore,
} from '@src/core/themes';

import { connect, Provider } from 'react-redux';
import { store } from './store';
import { Test } from './test.component';



export default class App extends React.Component {


  public render(): React.ReactNode {

    return (
      <Provider store={store}>
        <Test/>
      </Provider>
    );
  }
}

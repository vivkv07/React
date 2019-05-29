import React from 'react';
import { Provider } from 'react-redux';
import { store } from './main.store';
import { Main } from './main.component';

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

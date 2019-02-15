import React, { Component } from 'react';
import mainReducer from './main-reducer';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigations/root';
import { StatusBar, View } from 'react-native';

const middleware = applyMiddleware(promiseMiddleware());
export const store = createStore(mainReducer, middleware);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App
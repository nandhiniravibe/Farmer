import React, { Component } from 'react';
import rootReducer from './main-reducer';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigations/root';
import { StatusBar, View } from 'react-native';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer, {}, compose(applyMiddleware(thunk))
)

// const middleware = applyMiddleware(promiseMiddleware());
// export const store = createStore(rootReducer,{}, middleware);

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
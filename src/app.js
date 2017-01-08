import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

import MainAppContainer from './containers/MainAppContainer';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
  ),
);

render(
  <Provider store={store}>
    <MainAppContainer />
  </Provider>,
  document.getElementById('app'),
);

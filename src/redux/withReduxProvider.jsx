/* eslint-disable react/prop-types */

import React from 'react';
import withNextRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';
import configureStore from './store';

const withProvider = WrappedComponent =>
  class WithProvider extends App {
    render() {
      const { store, ...rest } = this.props;
      return (
        <Provider store={store}>
          <WrappedComponent {...rest} />
        </Provider>
      );
    }
  };

const withRedux = compose(
  withNextRedux(configureStore),
  withReduxSaga,
  withProvider,
);

export default withRedux;

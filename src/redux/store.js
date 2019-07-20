import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import rootReducer from './reducer';

const IS_DEV = process.env.NODE_ENV === 'development';

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = IS_DEV
    ? createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    : createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;

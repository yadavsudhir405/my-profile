import { createStore } from 'redux';

import moduleReducer from '../reducer';

jest.mock('../../modules/login', () => ({
  loginReducer: jest.fn(() => ({})),
}));

describe('Reducer Module', () => {
  let combinedReducers;
  beforeEach(() => {
    const store = createStore(moduleReducer);
    combinedReducers = Object.keys(store.getState());
  });

  it('should contain the app reducers', () => {
    expect(combinedReducers).toContain('login');
  });
});

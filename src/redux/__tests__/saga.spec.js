import { all, fork } from 'redux-saga/effects';

import rootSaga from '../saga';
import { loginSaga } from '../../modules/login';
import { claimSaga } from '../../modules/claims';

jest.mock('../../modules/login', () => ({ loginSaga: function*() {} }));

describe('Root Saga', () => {
  describe('Root Saga', () => {
    it('should fork sagas', () => {
      const generator = rootSaga();

      let next = generator.next();

      expect(next.value).toEqual(all([fork(loginSaga)]));

      next = generator.next();

      expect(next.value).toEqual(all([fork(claimSaga)]));
    });

    it('should be done', () => {
      const generator = rootSaga();
      generator.next();
      generator.next();
      const next = generator.next();

      expect(next).toEqual({ done: true, value: undefined });
    });
  });
});

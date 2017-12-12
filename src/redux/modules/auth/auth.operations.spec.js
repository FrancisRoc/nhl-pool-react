import actions from './auth.actions';
import operations from './auth.operations';
import * as authApi from '../../../api/authHttp';
import * as storage from '../../../utils/storage';
import { browserHistory } from 'react-router';

describe('auth operations', () => {
  afterEach(() => jest.resetAllMocks());
  storage.put = jest.fn();
  storage.remove = jest.fn();
  browserHistory.push = jest.fn();

  describe('login', () => {
    it('should dispatch loginRequest and loginSuccess actions and redirect to pools view on success', () => {
      const mockCredentials = 'mockCredentials';
      const mockDispatch = jest.fn();
      const mockRes = {
        token: 'mockToken',
        id: 'mockId',
      };

      authApi.login = jest.fn(
        () => new Promise(resolve => process.nextTick(resolve(mockRes)))
      );

      return operations
        .login(mockCredentials)(mockDispatch)
        .then(() => {
          const dispatchs = mockDispatch.mock.calls;
          expect(dispatchs).toHaveLength(2);
          expect(dispatchs[0][0]).toEqual(actions.loginRequest());
          expect(dispatchs[1][0]).toEqual(actions.loginSuccess(mockRes));
          expect(authApi.login).toHaveBeenCalledWith(mockCredentials);
          expect(storage.put).toHaveBeenCalledTimes(2);
          expect(storage.put).toHaveBeenLastCalledWith('id', mockRes.id);
          expect(browserHistory.push).toHaveBeenCalledWith('/dashboard');
        });
    });
  });
});

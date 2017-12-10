import reducer from './auth.reducers';
import types from './auth.types';
import actions from './auth.actions';
import * as storage from '../../../utils/storage';

const expectedInitialState = {
  isAuthenticated: false,
  isFetching: false,
};

describe('auth reducer', () => {
  afterEach(() => jest.resetAllMocks());
  storage.get = jest.fn(() => '');

  it(`should handle ${types.LOGIN_REQUEST}`, () => {
    const expectedState = {
      ...expectedInitialState,
      isFetching: true,
    };
    expect(reducer(expectedInitialState, actions.loginRequest())).toEqual(
      expectedState
    );
  });
  it(`should handle ${types.LOGIN_SUCCESS}`, () => {
    const expectedState = {
      ...expectedInitialState,
      isAuthenticated: true,
    };
    const mockInfo = {
      first_name: 'first',
      last_name: 'last',
      locale: 'en',
    };
    expect(
      reducer(expectedInitialState, actions.loginSuccess(mockInfo))
    ).toEqual(expectedState);
  });
  it(`should handle ${types.LOGIN_FAILURE}`, () => {
    const expectedState = {
      ...expectedInitialState,
    };
    const mockError = { type: 'mockErrorType' };
    expect(
      reducer(expectedInitialState, actions.loginFailure(mockError))
    ).toEqual(expectedState);
  });
});

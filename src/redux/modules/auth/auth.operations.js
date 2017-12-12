import { browserHistory } from 'react-router';
import actions from './auth.actions';
import { put /*, remove*/ } from '../../../utils/storage';
import * as authApi from '../../../api/authHttp';
import * as accountApi from '../../../api/accountHttp';

const loadProfile = token => dispatch => {
  if (!token) {
    dispatch(actions.loadProfileUnauthorized());
    return Promise.resolve();
  }
  return accountApi
    .fetchAccount()
    .then(res => dispatch(actions.loadProfileSucces(res)))
    .catch(err => {
      if (err.type === 'invalid_token') {
        return dispatch(actions.loadProfileUnauthorized());
      } else {
        throw err;
      }
    });
};

const login = credentials => dispatch => {
  dispatch(actions.loginRequest());
  return authApi
    .login(credentials)
    .then(res => {
      put('token', res.token);
      put('id', res.id);
      return dispatch(actions.loginSuccess(res));
    })
    .then(() => {
      browserHistory.push('/dashboard');
    })
    .catch(err => dispatch(actions.loginFailure(err)));
};

const register = credentials => dispatch => {
  dispatch(actions.registerRequest());
  return authApi
    .register(credentials)
    .then(res => {
      put('token', res.token);
      put('id', res.id);
      return dispatch(actions.registerSuccess(res));
    })
    .then(() => {
      browserHistory.push('/dashboard');
    })
    .catch(err => dispatch(actions.registerFailure(err)));
};

export default {
  loadProfile,
  login,
  register,
};

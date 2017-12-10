import { browserHistory } from 'react-router';
import actions from './auth.actions';
import { put /*, remove*/ } from '../../../utils/storage';
import * as authApi from '../../../api/authHttp';
// import * as accountApi from '../../../api/account';

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
      browserHistory.push('/pools');
    })
    .catch(err => dispatch(actions.loginFailure(err)));
};

export default {
  login,
};

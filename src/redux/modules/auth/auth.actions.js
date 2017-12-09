import types from './auth.types.js';

const loginRequest = credentials => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

const loginSuccess = user => {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  };
};

const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    errorType: error.type,
  };
};

export default { loginRequest, loginSuccess, loginFailure };

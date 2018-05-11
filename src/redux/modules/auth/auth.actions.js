import types from './auth.types.js';

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = info => {
  return {
    type: types.LOGIN_SUCCESS,
    info,
  };
};
const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    error,
  };
};

const registerRequest = () => {
  return {
    type: types.REGISTER_REQUEST,
  };
};
const registerSuccess = info => {
  return {
    type: types.REGISTER_SUCCESS,
    info,
  };
};
const registerFailure = error => {
  return {
    type: types.REGISTER_FAILURE,
    error,
  };
};

const loadProfileSucces = info => ({
  type: types.LOAD_PROFILE_SUCCESS,
  info,
});
const loadProfileUnauthorized = () => ({
  type: types.LOAD_PROFILE_UNAUTHORIZED,
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure,

  registerRequest,
  registerSuccess,
  registerFailure,

  loadProfileSucces,
  loadProfileUnauthorized,
};

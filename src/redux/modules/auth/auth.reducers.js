import types from './auth.types';
import storage from '../../../utils/storage';

const initialState = () => ({
  isFetching: false,
  isAuthenticated: storage.get('token') ? true : false,
  errorType: null,
});

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.LOGIN_SUCCESS:
    case types.LOAD_PROFILE_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
    case types.LOAD_PROFILE_UNAUTHORIZED:
    case types.REGISTER_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorType: action.errorType,
      };
    default:
      return state;
  }
}

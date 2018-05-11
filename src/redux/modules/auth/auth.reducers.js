import types from './auth.types';
import { combineReducers } from 'redux';
import storage from '../../../utils/storage';

const initialState = () => ({
  isFetching: false,
  isAuthenticated: storage.get('token') ? true : false,
});

const loading = (state = initialState(), action = {}) => {
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
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const errorType = (state = null, action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.LOGIN_SUCCESS:
    case types.LOAD_PROFILE_SUCCESS:
    case types.REGISTER_SUCCESS:
      return null;
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return action.error.type;
    default:
      return state;
  }
};

export default combineReducers({
  loading,
  errorType,
});

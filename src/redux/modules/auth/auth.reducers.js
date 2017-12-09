import types from './auth.types';
import storage from '../../../utils/storage';

const initialState = () => ({
  isFetching: false,
  isAuthenticated: storage.get('id_token') ? true : false,
});

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: false,
        errorType: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
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

import types from './auth.types';
import storage from '../../../utils/storage';

const initialState = () => ({
  isFetching: false,
  isAuthenticated: storage.get('token') ? true : false,
});

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
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
      };
    default:
      return state;
  }
}

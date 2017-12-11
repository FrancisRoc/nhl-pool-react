//import types from './account.types';
import authTypes from '../auth/auth.types';
import storage from '../../../utils/storage';

const initialState = () => ({
  locale: storage.get('locale') || 'fr',
  theme: 'light', // it will be easy to change if we want to make it configurable
});

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOAD_PROFILE_SUCCESS:
      const { locale } = action.info;
      return {
        ...state,
        locale,
      };
    default:
      return state;
  }
}

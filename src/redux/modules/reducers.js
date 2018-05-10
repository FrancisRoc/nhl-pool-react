import { combineReducers } from 'redux';
import auth from './auth';
import account from './account';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ auth, account, form: formReducer });

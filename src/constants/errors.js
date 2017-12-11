import { defineMessages } from 'react-intl';

const messages = defineMessages({
  loginError: {
    id: 'error.loginError',
    defaultMessage: 'Invalid email or password, please try again.',
  },
});

export const login_error_id = 'login_error';
export const errorsConstants = {
  login_error: {
    id: login_error_id,
    message: messages.loginError,
  },
};

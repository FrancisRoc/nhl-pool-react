import { defineMessages } from 'react-intl';

const messages = defineMessages({
  loginError: {
    id: 'error.loginError',
    defaultMessage: 'Invalid email or password, please try again.',
  },
});

export const errorsConstants = {
  email_or_pass: {
    id: 'email_or_pass',
    message: messages.loginError,
  },
};

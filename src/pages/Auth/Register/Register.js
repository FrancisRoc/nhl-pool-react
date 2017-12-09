import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import Input from '../../../components/forms/Input';
import Button from '../../../components/Button';
import H2 from '../../../components/H2';
import styled from 'styled-components';
import { Link } from 'react-router';
import React from 'react';

const messages = defineMessages({
  signUp: {
    id: 'register.signUp',
    defaultMessage: 'Sign up',
  },
});

const RegisterForm = styled.div`
  text-align: center;
`;

class Register extends React.Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <RegisterForm>
        <H2>
          <FormattedMessage {...messages.signUp} />
        </H2>
      </RegisterForm>
    );
  }
}

export default injectIntl(Register);

import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import ButtonLoader from '../../../components/loaders/ButtonLoader';
import { login_error_id } from '../../../constants/errors';
import ErrorBox from '../../../components/errors/ErrorBox';
import Input from '../../../components/forms/Input';
import Button from '../../../components/Button';
import { reduxForm, Field } from 'redux-form';
import H2 from '../../../components/H2';
import styled from 'styled-components';
import { Link } from 'react-router';
import React from 'react';
import Color from 'color';

const messages = defineMessages({
  welcome: {
    id: 'login.welcome',
    defaultMessage: 'Sign in',
  },
  email: {
    id: 'login.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'login.password',
    defaultMessage: 'Password',
  },
  loginButton: {
    id: 'login.loginButton',
    defaultMessage: 'Login',
  },
  registerButton: {
    id: 'login.registerButton',
    defaultMessage: 'Sign up now',
  },
  newMember: {
    id: 'login.newMember',
    defaultMessage: 'New to Nhl Pool Helper?',
  },
});

const Form = styled.form`
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const LoginButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 8px 0;
`;

const NewMemberText = styled.div`
  color: ${props => props.theme.palette.text};
  margin-top: 10px;
`;

const RegisterLink = styled(Link)`
  color: ${props => props.theme.palette.link};
  &:hover {
    cursor: pointer;
    color: ${props =>
      Color(props.theme.palette.link)
        .darken(0.3)
        .toString()};
  }
`;

let LoginForm = props => {
  const { formatMessage } = props.intl;
  const { handleSubmit, pristine, submitting, errorType } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <H2>
        <FormattedMessage {...messages.welcome} />
      </H2>
      {errorType && <ErrorBox errorType={errorType} />}
      <InputWrapper>
        <Field
          name="email"
          type="email"
          component={Input}
          placeholder={formatMessage(messages.email)}
        />
      </InputWrapper>
      <InputWrapper>
        <Field
          name="password"
          type="password"
          component={Input}
          placeholder={formatMessage(messages.password)}
        />
      </InputWrapper>
      <ActionsSection>
        <LoginButton disabled={pristine || submitting} btnType="accent">
          <FormattedMessage {...messages.loginButton} />
          {submitting ? <ButtonLoader /> : null}
        </LoginButton>
        <NewMemberText>
          <FormattedMessage {...messages.newMember} />
        </NewMemberText>
        <RegisterLink to="/register" style={{ textDecoration: 'none' }}>
          <FormattedMessage {...messages.registerButton} />
        </RegisterLink>
      </ActionsSection>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default injectIntl(LoginForm);

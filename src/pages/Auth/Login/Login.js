import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import Loader from 'react-loader';
import Input from '../../../components/forms/Input';
import Button from '../../../components/Button';
import H2 from '../../../components/H2';
import styled, { withTheme } from 'styled-components';
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

const LoginForm = styled.div`
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin: 8px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 35px;
`;
const InputIcon = styled.i`
  padding: 5px;
`;

const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 35px;
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

const LoadingState = styled.div`
  padding: 0 10px;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  position: relative;
`;
const Loading = () => (
  <LoadingState>
    <Loader color="white" top="50%" left="50%" scale={0.4} />
  </LoadingState>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onEmailChange = newValue => {
    this.setState({ email: newValue });
  };

  onPasswordChange = newValue => {
    this.setState({ password: newValue });
  };

  onSubmit = (email, password) => {
    this.props.onLogin({ email, password });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { isFetching } = this.props;
    return (
      <LoginForm
        onKeyPress={e => {
          if (e.key === 'Enter') {
            this.onSubmit(this.state.email, this.state.password);
          }
        }}
      >
        <H2>
          <FormattedMessage {...messages.welcome} />
        </H2>
        <InputWrapper>
          <IconWrapper>
            <InputIcon className="fa fa-envelope fa-lg" />
          </IconWrapper>
          <StyledInput
            placeholder={formatMessage(messages.email)}
            value={this.state.email}
            onChange={e => this.onEmailChange(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <IconWrapper>
            <InputIcon className="fa fa-unlock-alt fa-lg" />
          </IconWrapper>
          <StyledInput
            placeholder={formatMessage(messages.password)}
            type="password"
            value={this.state.password}
            onChange={e => this.onPasswordChange(e.target.value)}
          />
        </InputWrapper>
        <ActionsSection>
          <LoginButton
            disabled={isFetching}
            btnType="accent"
            onClick={() => this.onSubmit(this.state.email, this.state.password)}
          >
            <FormattedMessage {...messages.loginButton} />
            {isFetching ? <Loading /> : null}
          </LoginButton>
          <NewMemberText>
            <FormattedMessage {...messages.newMember} />
          </NewMemberText>
          <RegisterLink to="/register" style={{ textDecoration: 'none' }}>
            <FormattedMessage {...messages.registerButton} />
          </RegisterLink>
        </ActionsSection>
      </LoginForm>
    );
  }
}

export default injectIntl(Login);

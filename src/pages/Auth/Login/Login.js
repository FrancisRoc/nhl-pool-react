import React from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import Input from '../../../components/forms/Input';
import Label from '../../../components/forms/Label';
import FlatButton from '../../../components/FlatButton';
import Button from '../../../components/Button';
import H2 from '../../../components/H2';

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
    defaultMessage: 'Register',
  },
  newMember: {
    id: 'login.newMember',
    defaultMessage: 'New to Nhl Pool Helper?',
  },
});

const LoginForm = styled.div`
  height: 500px;
  text-align: center;
`;

const StyledInput = styled(Input)`margin: 8px 0;`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 35px;
`;
const InputIcon = styled.i`padding: 5px;`;

const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
`;
const LoginButton = styled(Button)`width: 125px;`;

const RegisterSection = styled.div`
  display: flex;
  align-items: center;
`;
const NewMemberText = styled.div`color: ${props => props.theme.palette.text};`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', showErrors: false };
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <LoginForm>
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
          />
        </InputWrapper>
        <InputWrapper>
          <IconWrapper>
            <InputIcon className="fa fa-unlock-alt fa-lg" />
          </IconWrapper>
          <StyledInput
            placeholder={formatMessage(messages.password)}
            value={this.state.password}
          />
        </InputWrapper>
        <ActionsSection>
          <LoginButton
            btnType="accent"
            onClick={() => this.onSubmit(this.state.email, this.state.password)}
          >
            <FormattedMessage {...messages.loginButton} />
          </LoginButton>
          <RegisterSection>
            <NewMemberText>
              <FormattedMessage {...messages.newMember} />
            </NewMemberText>
            <FlatButton
              onClick={() =>
                this.onSubmit(this.state.email, this.state.password)}
            >
              <FormattedMessage {...messages.registerButton} />
            </FlatButton>
          </RegisterSection>
        </ActionsSection>
      </LoginForm>
    );
  }
}

export default injectIntl(Login);

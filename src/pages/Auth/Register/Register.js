import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import ButtonLoader from '../../../components/loaders/ButtonLoader';
import Input from '../../../components/forms/Input';
import Button from '../../../components/Button';
import H2 from '../../../components/H2';
import styled from 'styled-components';
import React from 'react';
import Color from 'color';

const messages = defineMessages({
  signUp: {
    id: 'register.signUp',
    defaultMessage: 'Sign up',
  },
  firstName: {
    id: 'register.firstName',
    defaultMessage: 'First name',
  },
  lastName: {
    id: 'register.lastName',
    defaultMessage: 'Last name',
  },
  minLengthError: {
    id: 'register.minLenghtError',
    defaultMessage: 'Minimum 2 characters',
  },
  email: {
    id: 'login.email',
    defaultMessage: 'Email',
  },
  emailError: {
    id: 'login.emailError',
    defaultMessage: 'Invalid email',
  },
  password: {
    id: 'login.password',
    defaultMessage: 'Password',
  },
  passwordError: {
    id: 'login.passwordError',
    defaultMessage: 'Please enter a password',
  },
  confirmPassword: {
    id: 'register.confirmPassword',
    defaultMessage: 'Confirm password',
  },
  passwordMatchError: {
    id: 'register.passwordMatchError',
    defaultMessage: "Passwords don't match",
  },
});

function errorColor(props) {
  return Color(props.theme.palette.error)
    .fade(0.1)
    .toString();
}

const RegisterForm = styled.div`
  text-align: center;
`;

const NameInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 230px;
`;
const ErrorMessage = styled.div`
  color: ${props => {
    if (props.showError) return errorColor(props);
  }};
  display: ${props => (props.showError ? 'inline' : 'none')};
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const StyledInput = styled(Input)`
  margin: 8px 0;
  border-color: ${props =>
    props.showError ? errorColor(props) : props.theme.palette.border};
`;

const RegisterButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 8px 0;
`;

// Thanks to https://goshakkk.name/instant-form-fields-validation-react/
// for my inspiration for form validation and errors
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
      submitted: false,
    };
  }

  onFirstNameChange = newValue => {
    this.setState({ firstName: newValue });
  };

  onLastNameChange = newValue => {
    this.setState({ lastName: newValue });
  };

  onEmailChange = newValue => {
    this.setState({ email: newValue });
  };

  onPasswordChange = newValue => {
    this.setState({ password: newValue });
  };

  onConfirmPasswordChange = newValue => {
    this.setState({ confirmPassword: newValue });
  };

  onSubmit = (first_name, last_name, email, password, locale) => {
    const errors = this.validate();
    const errorKeys = Object.keys(errors);
    for (let i = 0; i < errorKeys.length; i++) {
      if (errors && errors[errorKeys[i]]) {
        this.setState({ submitted: true });
        return false;
      }
    }
    // No errors -> validate
    this.props.register({ first_name, last_name, email, password, locale });
  };

  validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return {
      firstName: this.state.firstName.length < 2,
      lastName: this.state.lastName.length < 2,
      email: !emailRegex.test(this.state.email),
      password: this.state.password.length === 0,
      confirmPassword: this.state.password !== this.state.confirmPassword,
    };
  };

  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  shouldDisplayError = (field, errors) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field] || this.state.submitted;
    return hasError ? shouldShow : false;
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { locale, isFetching } = this.props;
    const errors = this.validate();
    return (
      <RegisterForm>
        <H2>
          <FormattedMessage {...messages.signUp} />
        </H2>
        <NameInputWrapper>
          <NameFormGroup>
            <StyledInput
              onBlur={this.handleBlur('firstName')}
              showError={this.shouldDisplayError('firstName', errors)}
              placeholder={formatMessage(messages.firstName)}
              value={this.state.firstName}
              onChange={e => this.onFirstNameChange(e.target.value)}
            />
            <ErrorMessage
              showError={this.shouldDisplayError('firstName', errors)}
            >
              <FormattedMessage {...messages.minLengthError} />
            </ErrorMessage>
          </NameFormGroup>
          <NameFormGroup>
            <StyledInput
              onBlur={this.handleBlur('lastName')}
              showError={this.shouldDisplayError('lastName', errors)}
              placeholder={formatMessage(messages.lastName)}
              value={this.state.lastName}
              onChange={e => this.onLastNameChange(e.target.value)}
            />
            <ErrorMessage
              showError={this.shouldDisplayError('lastName', errors)}
            >
              <FormattedMessage {...messages.minLengthError} />
            </ErrorMessage>
          </NameFormGroup>
        </NameInputWrapper>

        <InputWrapper>
          <StyledInput
            onBlur={this.handleBlur('email')}
            showError={this.shouldDisplayError('email', errors)}
            placeholder={formatMessage(messages.email)}
            value={this.state.email}
            onChange={e => this.onEmailChange(e.target.value)}
          />
          <ErrorMessage showError={this.shouldDisplayError('email', errors)}>
            <FormattedMessage {...messages.emailError} />
          </ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            onBlur={this.handleBlur('password')}
            showError={this.shouldDisplayError('password', errors)}
            placeholder={formatMessage(messages.password)}
            type="password"
            value={this.state.password}
            onChange={e => this.onPasswordChange(e.target.value)}
          />
          <ErrorMessage showError={this.shouldDisplayError('password', errors)}>
            <FormattedMessage {...messages.passwordError} />
          </ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            onBlur={this.handleBlur('confirmPassword')}
            showError={this.shouldDisplayError('confirmPassword', errors)}
            placeholder={formatMessage(messages.confirmPassword)}
            type="password"
            value={this.state.confirmPassword}
            onChange={e => this.onConfirmPasswordChange(e.target.value)}
          />
          <ErrorMessage
            showError={this.shouldDisplayError('confirmPassword', errors)}
          >
            <FormattedMessage {...messages.passwordMatchError} />
          </ErrorMessage>
        </InputWrapper>
        <RegisterButton
          disabled={isFetching}
          btnType="accent"
          onClick={() =>
            this.onSubmit(
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.state.password,
              locale
            )
          }
        >
          <FormattedMessage {...messages.signUp} />
          {isFetching ? <ButtonLoader /> : null}
        </RegisterButton>
      </RegisterForm>
    );
  }
}

export default injectIntl(Register);

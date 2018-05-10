import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  submit = values => {
    this.props.onLogin(values);
  };
  render() {
    const { isAuthError } = this.props;
    return <LoginForm onSubmit={this.submit} isAuthError={isAuthError} />;
  }
}

export default Login;

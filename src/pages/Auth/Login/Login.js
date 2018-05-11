import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  submit = values => {
    this.props.onLogin(values);
  };
  render() {
    const { errorType } = this.props;
    return <LoginForm onSubmit={this.submit} errorType={errorType} />;
  }
}

export default Login;

import { Route, Redirect, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import Login from './Login/Login';

const MainLayout = styled.div`
  position: absolute;
  padding: 10px;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const AuthFrame = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  padding: 20px;
`;

class Auth extends Component {
  render() {
    return (
      <div>
        <MainLayout>
          <AuthFrame>
            <Switch>
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </AuthFrame>
        </MainLayout>
      </div>
    );
  }
}

export default Auth;

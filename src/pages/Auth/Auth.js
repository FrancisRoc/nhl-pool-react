import React, { Component } from 'react';
import styled from 'styled-components';
import Pannel from '../../components/Pannel';
import TopBar from '../../components/TopBar';

const MainLayout = styled.div`
  position: absolute;
  padding: 10px;
  top: 55px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const AuthFrame = styled(Pannel)`
  margin-left: auto;
  margin-right: auto;
  max-width: 475px;
  padding: 20px;
`;

class Auth extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <MainLayout>
          <AuthFrame>{this.props.children}</AuthFrame>
        </MainLayout>
      </div>
    );
  }
}

export default Auth;

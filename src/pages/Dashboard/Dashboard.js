import React from 'react';
import TopBar from '../../components/TopBar';
import TopBarLinks from './TopBarLinks';
import styled from 'styled-components';

const MainLayout = styled.div`
  top: 55px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <TopBar links={<TopBarLinks />} />
        <MainLayout>{this.props.children}</MainLayout>
      </div>
    );
  }
}

export default Dashboard;

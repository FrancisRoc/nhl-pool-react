import { defineMessages, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import React from 'react';

const messages = defineMessages({
  appName: {
    id: 'menu.appName',
    defaultMessage: 'NHL pool helper',
  },
});

const TopBarWrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  height: 50px;
  display: flex;
`;

const PullLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  padding: 0 10px 0 20px;
  height: 30px;
`;
const AppName = styled.div`
  padding: 2px;
  &:hover {
    cursor: default;
  }
  text-transform: uppercase;
`;

const TopBar = ({ links }) => (
  <TopBarWrapper>
    <PullLeft>
      <Logo src="/assets/logo.png" alt="Plan" />
      <AppName>
        <FormattedMessage {...messages.appName} />
      </AppName>
    </PullLeft>
  </TopBarWrapper>
);

export default TopBar;

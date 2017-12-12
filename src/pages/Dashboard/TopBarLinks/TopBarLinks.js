import { defineMessages, FormattedMessage } from 'react-intl';
import styled, { withTheme } from 'styled-components';
import { IndexLink } from 'react-router';
import React from 'react';

const messages = defineMessages({
  menuLinkPool: {
    id: 'menu.pools',
    defaultMessage: 'My pools',
  },
  menuLinkLogout: {
    id: 'menu.menuLinkLogout',
    defaultMessage: 'Logout',
  },
});

const FlattenLinks = styled.div`
  display: flex;
`;

const StyledLinkTab = styled(IndexLink)`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.1s ease-in-out;
  color: ${props => props.theme.palette.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.accent1};
  }
`;

const activeLink = theme => {
  return {
    borderBottom: `2px solid ${theme.palette.accent1}`,
    color: theme.palette.accent1,
  };
};

const StyledLinkText = styled.p`
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 14px;
`;

const LogoutIcon = styled.i`
  padding: 0 5px;
`;

const LinkTab = ({ theme }) => (
  <FlattenLinks>
    <StyledLinkTab
      to={'/dashboard/pools'}
      style={{ textDecoration: 'none' }}
      activeStyle={activeLink(theme)}
    >
      <StyledLinkText>
        <FormattedMessage {...messages.menuLinkPool} />
      </StyledLinkText>
    </StyledLinkTab>
    <StyledLinkTab>
      <StyledLinkText>
        <LogoutIcon className="fa fa-sign-out fa-lg" />
        <FormattedMessage {...messages.menuLinkLogout} />
      </StyledLinkText>
    </StyledLinkTab>
  </FlattenLinks>
);

export default withTheme(LinkTab);

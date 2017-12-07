import React, { Component } from 'react';
import styled from 'styled-components';

const FlatButton = styled.a`
  color: ${props => props.theme.palette.primary};
  line-height: 36px;
  display: block;
  text-align: center;
  min-width: 64px;
  padding: 0 8px;
  margin: 0 8px;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.primaryDark};
  }

  &:disabled {
    filter: opacity(0.3);
  }
`;

class FlatButtonClass extends Component {
  render() {
    return (
      <FlatButton
        className={this.props.className + ' clickable'}
        onClick={this.props.onClick}
        {...this.props}
      >
        {this.props.children}
      </FlatButton>
    );
  }
}

export default FlatButtonClass;

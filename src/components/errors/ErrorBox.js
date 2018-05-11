import { defineMessages, FormattedMessage } from 'react-intl';
import { errorsConstants } from '../../constants/errors';
import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import Color from 'color';

const messages = defineMessages({
  defaultMessage: {
    id: 'error.defaultMessage',
    defaultMessage: 'Error, please try again later.',
  },
});

const FADE_DELAY = 500;
const FULL_HEIGHT = '100%';
const PADDING = '15px';
const MARGIN = '10px 0';
const fadeIn = keyframes`
  0% {
    opacity:0;
    height: 0;
    padding: 0;
    margin: 0;
  }
  100% {
    opacity:1;
    height: ${FULL_HEIGHT};
    padding: ${PADDING};
    margin: ${MARGIN};
  }
}`;

const fadeOut = keyframes`
  0% {
    opacity:1;
    height: ${FULL_HEIGHT};
    padding: ${PADDING};
    margin: ${MARGIN};
  }
  100% {
    opacity:0;
    height: 0;
    padding: 0;
    margin: 0;
  }
}`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.palette.errorBg};
  border: 1px solid ${props => props.theme.palette.canvas};
  padding: ${PADDING};
  font-size: 14px;
  border-radius: 4px;
  margin: ${MARGIN};
  position: relative;
  color: ${props =>
    Color(props.theme.palette.text)
      .fade(0.15)
      .toString()};
  animation: ${props =>
    props.show ? `${fadeIn} ${FADE_DELAY}ms` : `${fadeOut} ${FADE_DELAY}ms`};
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;
  color: inherit;
  &:hover {
    cursor: pointer;
    color: ${props =>
      Color(props.theme.palette.text)
        .fade(0.35)
        .toString()};
  }
`;

const MessageIcon = styled.div`
  padding: 5px;
  color: inherit;
`;
const Message = styled.span`
  color: inherit;
`;

class ErrorBoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.timeout = props.duration
      ? setTimeout(() => this._handleCloseError(), props.duration - FADE_DELAY)
      : null;
    this._handleCloseError = this._handleCloseError.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  _handleCloseError() {
    clearTimeout(this.timeout);
    this.setState({
      show: false,
    });
  }

  render() {
    const { errorType, duration } = this.props;
    return (
      <ErrorContainer show={this.state.show}>
        {duration ? (
          <CloseIcon onClick={this._handleCloseError}>
            <i className="fa fa-times" />
          </CloseIcon>
        ) : null}
        <MessageIcon>
          <i className="fa fa-times-circle fa-lg" />
        </MessageIcon>
        <Message>
          {errorType ? (
            <FormattedMessage {...errorsConstants[errorType].message} />
          ) : (
            <FormattedMessage {...messages.defaultMessage} />
          )}
        </Message>
      </ErrorContainer>
    );
  }
}

export default ErrorBoxClass;

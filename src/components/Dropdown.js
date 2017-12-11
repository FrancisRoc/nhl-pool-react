import React from 'react';
import styled from 'styled-components';

const FullPageDiv = styled.div`
  position: fixed;
  top: -100vh;
  right: -100vh;
  bottom: -100vh;
  left: -100vh;
  background-color: transparent;
`;

const DropDown = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.palette.white};
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  z-index: 1;

  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
    opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transform: ${props => (props.isOpen ? 'scaleY(1)' : '')};
  transform-origin: left top 0px;
`;

const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownWrapper = styled.div`
  z-index: 2000;
  position: relative;
`;

const AbsoluteDropdown = ({
  isOpen,
  onOutsideClick,
  children,
  top,
  right,
  bottom,
  left,
}) => {
  if (!isOpen) {
    return <div style={{ visibility: 'hidden' }} />;
  }
  return (
    <DropdownWrapper>
      <DropDown
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        isOpen={isOpen}
      >
        <DropdownList>{children}</DropdownList>
      </DropDown>
      <FullPageDiv onClick={onOutsideClick} />
    </DropdownWrapper>
  );
};

export default AbsoluteDropdown;

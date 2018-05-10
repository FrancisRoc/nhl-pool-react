import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 8px;
  outline: none;
  appearance: none;
  background-color: transparent;
  border: 1.5px solid
    ${props =>
      props.meta.error && props.meta.touched
        ? props.theme.palette.error
        : props.theme.palette.border};
  border-radius: 3px;
  font-size: 16px;
  transition: border 0.25s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.palette.link};
    outline: 0;
    box-shadow: none;
  }
`;

const InputError = styled.div`
  color: ${props => props.theme.palette.error};
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
`;

const Input = props => {
  const { input } = props;
  const { touched, error } = props.meta;
  return (
    <InputWrapper>
      <StyledInput {...input} {...props} />
      {touched && error ? <InputError>{error}</InputError> : null}
    </InputWrapper>
  );
};

export default Input;

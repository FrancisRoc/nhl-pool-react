import styled from 'styled-components';
import Loader from 'react-loader';
import React from 'react';

const LoadingState = styled.div`
  padding: 0 10px;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  position: relative;
`;

const ButtonLoader = () => (
  <LoadingState>
    <Loader color="white" top="50%" left="50%" scale={0.4} />
  </LoadingState>
);

export default ButtonLoader;

// @flow
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageLoader = () => <LoaderContainer>Loading</LoaderContainer>;

export default PageLoader;

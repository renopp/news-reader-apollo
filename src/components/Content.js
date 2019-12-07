// @flow
import React from 'react';
import styled from 'styled-components';

const ContentContainerStyled = styled.div`
  margin: auto;
  max-width: 750px;
  position: relative;
  flex-direction: column;
`;

// $FlowFixMe
type Props = React.HTMLProps<HTMLButtonElement> & {};

const Content = ({children, ...props}: Props) => (
  <ContentContainerStyled {...props}>{children}</ContentContainerStyled>
);
export default Content;

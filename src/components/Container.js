// @flow
import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  flex: 1;
  overflow: auto;
  position: relative;
  flex-direction: column;
`;

const ContentStyled = styled.div`
  margin: auto;
  max-width: 80%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
`;

// $FlowFixMe
type Props = React.HTMLProps<HTMLButtonElement> & {
  backgroundColor: string,
};

const Container = ({children, backgroundColor = 'none', ...props}: Props) => (
  <ContainerStyled {...props}>
    <ContentStyled backgroundColor={backgroundColor}>{children}</ContentStyled>
  </ContainerStyled>
);
export default Container;

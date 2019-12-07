// @flow
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #e3e3e3;
  box-shadow: rgba(125, 125, 125, 0.3) 0px 3px 4px 0px;
`;

// $FlowFixMe
type Props = React.HTMLProps<HTMLButtonElement> & {};

const Button = ({children, ...props}: Props) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);
export default Button;

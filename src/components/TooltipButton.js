// @flow
import React from 'react';
import styled from 'styled-components';

const ToolTipButtonContainer = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
`;

// $FlowFixMe
type Props = React.HTMLProps<HTMLButtonElement> & {
  children: any,
};

const ToolTipButton = ({children, ...props}: Props) => (
  <ToolTipButtonContainer {...props}>{children}</ToolTipButtonContainer>
);

export default ToolTipButton;

// @flow
import React from 'react';
import styled from 'styled-components';

const FormatToolbarContainer = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 0 0 10px 0;
  border-top: solid 1.7px rgba(199, 198, 255, 0.15);
  border-bottom: solid 1.7px rgba(199, 198, 255, 0.15);
`;

type Props = {
  children: any,
};

const FormatToolbar = (props: Props) => (
  <FormatToolbarContainer>{props.children}</FormatToolbarContainer>
);

export default FormatToolbar;

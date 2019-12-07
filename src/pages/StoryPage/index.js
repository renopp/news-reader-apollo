// @flow
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Container from '../../components/Container';
import Content from '../../components/Content';
import StoryContent from './StoryContent';

type Props = RouteComponentProps & {};

const StoryPage = (props: Props) => (
  <Container>
    <Content>
      <StoryContent id={props.match.params.id} />
    </Content>
  </Container>
);

export default StoryPage;

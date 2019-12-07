// @flow
import React from 'react';
import Container from '../../components/Container';
import Content from '../../components/Content';
import HomeContainer from './HomeContent';

const HomePage = () => (
  <Container>
    <Content>
      <HomeContainer />
    </Content>
  </Container>
);

export default HomePage;

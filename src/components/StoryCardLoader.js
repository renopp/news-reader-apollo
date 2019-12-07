// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';
import Card from '../core-ui/Card';

const StoryCardLoader = () => (
  <Card>
    <ContentLoader height={43}>
      <rect x="0" y="7" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="30" rx="3" ry="3" width="50" height="8" />
    </ContentLoader>
  </Card>
);

export default StoryCardLoader;

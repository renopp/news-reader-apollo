// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';

const StoryLoader = () => (
  <ContentLoader height={475} width={400}>
    <rect x="15" y="10" rx="0" ry="0" width="275" height="25" />
    <rect x="16" y="41" rx="0" ry="0" width="50" height="9" />
    <rect x="13" y="60" rx="5" ry="5" width="372" height="160" />
    <rect x="18" y="240" rx="0" ry="0" width="299" height="10" />
    <rect x="18" y="262" rx="0" ry="0" width="299" height="10" />
    <rect x="18" y="281" rx="0" ry="0" width="299" height="10" />
    <rect x="18" y="301" rx="0" ry="0" width="299" height="10" />
  </ContentLoader>
);

export default StoryLoader;

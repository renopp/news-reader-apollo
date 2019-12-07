// @flow
import React from 'react';
import StoryCardLoader from './StoryCardLoader';

type Props = {
  numberOfItem?: number,
};

const StoryListLoader = ({numberOfItem = 5}: Props) => {
  const items = Array.from(Array(numberOfItem).keys());
  return (
    <React.Fragment>
      {items.map((_, idx) => (
        <StoryCardLoader key={idx} />
      ))}
    </React.Fragment>
  );
};

export default StoryListLoader;

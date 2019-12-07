// @flow
import React from 'react';
import StoryCard from './StoryCard';
import {type GetStories_story} from '../graphql/queries/types/GetStories';
import Button from '../core-ui/Button';

type Props = {
  loading: boolean,
  hasNext: boolean,
  fetchMore: () => void,
  stories: GetStories_story[],
};

const StoryList = (props: Props) => (
  <React.Fragment>
    {props.stories.map(story => (
      <StoryCard key={story.id} story={story} />
    ))}
    {props.hasNext &&
      (props.loading ? (
        <div>Loading...</div>
      ) : (
        <Button
          style={{marginBottom: '24px'}}
          onClick={() => {
            props.fetchMore();
          }}>
          More...
        </Button>
      ))}
  </React.Fragment>
);

export default StoryList;

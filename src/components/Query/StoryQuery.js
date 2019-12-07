// @flow
import {Query} from 'react-apollo';
import {GET_STORY_DETAIL} from '../../graphql/queries/storyQuery';
import {
  type GetStory,
  type GetStoryVariables,
} from '../../graphql/queries/types/GetStory';

class StoryQuery extends Query<GetStory, GetStoryVariables> {
  static query = GET_STORY_DETAIL;
}

export default StoryQuery;

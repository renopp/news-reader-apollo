// @flow
import {Query} from 'react-apollo';
import {GET_ALL_STORIES} from '../../graphql/queries/storyQuery';
import {
  type GetStories,
  type GetStoriesVariables,
} from '../../graphql/queries/types/GetStories';

class StoriesQuery extends Query<GetStories, GetStoriesVariables> {
  static query = GET_ALL_STORIES;
}

export default StoriesQuery;

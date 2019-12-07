// @flow
import {Mutation} from 'react-apollo';
import {ADD_STORY} from '../../graphql/mutations/storyMutation';
import {
  type AddPost,
  type AddPostVariables,
} from '../../graphql/mutations/types/AddPost';

class AddStoryMutation extends Mutation<AddPost, AddPostVariables> {
  static mutation = ADD_STORY;
}

export default AddStoryMutation;

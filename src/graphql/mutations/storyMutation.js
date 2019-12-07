import gql from 'graphql-tag';
import storyFragment from '../fragments/storyFragment';

export const ADD_STORY = gql`
  mutation AddPost($title: String!, $content: String!, $userId: uuid) {
    insert_story(objects: {title: $title, content: $content, userId: $userId}) {
      returning {
        ...StoryFragment
      }
    }
  }
  ${storyFragment}
`;

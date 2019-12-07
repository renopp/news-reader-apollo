import gql from 'graphql-tag';

const storyFragment = gql`
  fragment StoryFragment on story {
    id
    title
    user {
      name
    }
    created_at
  }
`;

export default storyFragment;

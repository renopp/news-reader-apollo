import gql from 'graphql-tag';
import storyFragment from '../fragments/storyFragment';

export const GET_ALL_STORIES = gql`
  query GetStories(
    $limit: Int = 10
    $offset: Int
    $search: String
    $order: order_by = desc
  ) {
    story(
      limit: $limit
      offset: $offset
      where: {title: {_ilike: $search}}
      order_by: {created_at: $order}
    ) {
      ...StoryFragment
    }
    story_aggregate {
      aggregate {
        count
      }
    }
  }
  ${storyFragment}
`;

export const GET_STORY_DETAIL = gql`
  query GetStory($id: uuid!) {
    story_by_pk(id: $id) {
      ...StoryFragment
      content
    }
  }
  ${storyFragment}
`;

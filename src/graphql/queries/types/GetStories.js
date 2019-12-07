/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStories
// ====================================================

export type GetStories_story_user = {
  __typename: "user",
  name: string,
};

export type GetStories_story = {
  __typename: "story",
  id: uuid,
  title: string,
  /**
   * An object relationship
   */
  user: GetStories_story_user,
  created_at: timestamptz,
};

export type GetStories_story_aggregate_aggregate = {
  __typename: "story_aggregate_fields",
  count: ?number,
};

export type GetStories_story_aggregate = {
  __typename: "story_aggregate",
  aggregate: ?GetStories_story_aggregate_aggregate,
};

export type GetStories = {
  /**
   * fetch data from the table: "story"
   */
  story: Array<GetStories_story>,
  /**
   * fetch aggregated fields from the table: "story"
   */
  story_aggregate: GetStories_story_aggregate,
};

export type GetStoriesVariables = {
  limit?: ?number,
  offset?: ?number,
  search?: ?string,
  order?: ?order_by,
};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * column ordering options
 */
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last";

//==============================================================
// END Enums and Input Objects
//==============================================================
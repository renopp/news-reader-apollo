/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStory
// ====================================================

export type GetStory_story_by_pk_user = {
  __typename: "user",
  name: string,
};

export type GetStory_story_by_pk = {
  __typename: "story",
  id: uuid,
  title: string,
  /**
   * An object relationship
   */
  user: GetStory_story_by_pk_user,
  created_at: timestamptz,
  content: string,
};

export type GetStory = {
  /**
   * fetch data from the table: "story" using primary key columns
   */
  story_by_pk: ?GetStory_story_by_pk
};

export type GetStoryVariables = {
  id: uuid
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
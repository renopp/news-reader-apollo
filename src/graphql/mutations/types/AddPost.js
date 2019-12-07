/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPost
// ====================================================

export type AddPost_insert_story_returning_user = {
  __typename: "user",
  name: string,
};

export type AddPost_insert_story_returning = {
  __typename: "story",
  id: uuid,
  title: string,
  /**
   * An object relationship
   */
  user: AddPost_insert_story_returning_user,
  created_at: timestamptz,
};

export type AddPost_insert_story = {
  __typename: "story_mutation_response",
  /**
   * data of the affected rows by the mutation
   */
  returning: Array<AddPost_insert_story_returning>,
};

export type AddPost = {
  /**
   * insert data into the table: "story"
   */
  insert_story: ?AddPost_insert_story
};

export type AddPostVariables = {
  title: string,
  content: string,
  userId?: ?uuid,
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
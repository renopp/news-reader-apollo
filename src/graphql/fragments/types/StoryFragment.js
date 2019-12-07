/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StoryFragment
// ====================================================

export type StoryFragment_user = {
  __typename: "user",
  name: string,
};

export type StoryFragment = {
  __typename: "story",
  id: uuid,
  title: string,
  /**
   * An object relationship
   */
  user: StoryFragment_user,
  created_at: timestamptz,
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
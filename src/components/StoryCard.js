// @flow
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {type GetStories_story} from '../graphql/queries/types/GetStories';
import Card from '../core-ui/Card';
import {convertToDateString} from '../utils/dateConverter';
import LoadFullStory from './LoadFullStory';

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Title = styled.h2`
  margin: 4px 0;
`;

const Author = styled.p``;

type Props = {
  story: GetStories_story,
};

const StoryCard = (props: Props) => {
  const story = props.story;
  return (
    <LoadFullStory id={story.id}>
      <LinkStyled to={`/story/${story.id}`}>
        <Card>
          <Title>{story.title}</Title>
          <Author>{story.user.name}</Author>
          <p>{convertToDateString(story.created_at)}</p>
        </Card>
      </LinkStyled>
    </LoadFullStory>
  );
};

export default StoryCard;

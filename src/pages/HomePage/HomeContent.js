// @flow
import React, {useState} from 'react';
import styled from 'styled-components';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Button from '../../core-ui/Button';
import debounce from '../../utils/debounce';
import StoryList from '../../components/StoryList';
import StoriesQuery from '../../components/Query/StoriesQuery';
import StoryListLoader from '../../components/StoryListLoader';

const TopContentContainer = styled.div`
  display: flex;
  margin: 16px 0;
`;

const SearchInput = styled.input`
  outline: none;
  min-width: 40%;
  font-size: 16px;
  padding: 2px 8px;
`;

const TopRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const HomeContainer = (props: RouteComponentProps) => {
  const [order, setOrder] = useState('desc');
  return (
    <StoriesQuery query={StoriesQuery.query} notifyOnNetworkStatusChange>
      {({data, loading, fetchMore, refetch}) => {
        if (loading && !data.story) return <StoryListLoader numberOfItem={6} />;

        const current = data.story.length;
        const total = data.story_aggregate.aggregate.count;
        const hasNext = current < total;
        const handleSearch = debounce(val => {
          refetch({search: val});
        }, 500);
        return (
          <>
            <TopContentContainer>
              <Button
                onClick={() => {
                  const nextOrderValue = order === 'desc' ? 'asc' : 'desc';
                  setOrder(nextOrderValue);
                  refetch({order: nextOrderValue});
                }}>
                {order.toUpperCase()}
              </Button>
              <SearchInput
                placeholder="Type to search..."
                onChange={e => {
                  const val = e.target.value;
                  handleSearch(`%${val}%`);
                }}
              />
              <TopRightContainer>
                <Button onClick={() => props.history.push('/write')}>
                  WRITE
                </Button>
              </TopRightContainer>
            </TopContentContainer>
            <StoryList
              hasNext={hasNext}
              stories={data.story}
              fetchMore={() => {
                fetchMore({
                  variables: {
                    offset: data.story.length,
                  },
                  updateQuery: (prev, {fetchMoreResult}) => {
                    if (!fetchMoreResult) {
                      return prev;
                    }
                    return Object.assign({}, prev, {
                      story: [...prev.story, ...fetchMoreResult.story],
                    });
                  },
                });
              }}
              loading={loading}
            />
          </>
        );
      }}
    </StoriesQuery>
  );
};

export default withRouter(HomeContainer);

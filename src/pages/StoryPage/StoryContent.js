// @flow
import React from 'react';
import {Value} from 'slate';
const Editor = React.lazy(() => import('../../components/Editor'));
import StoryQuery from '../../components/Query/StoryQuery';
import StoryLoader from '../../components/StoryLoader';

type Props = {id: string};

const StoryContent = (props: Props) => (
  <StoryQuery query={StoryQuery.query} variables={{id: props.id}}>
    {({data, loading}) => {
      if (loading) return <StoryLoader />;
      return (
        <React.Suspense fallback={<StoryLoader />}>
          <h1>{data.story_by_pk.title}</h1>
          <Editor
            isEnableEditing={false}
            value={Value.fromJSON(JSON.parse(data.story_by_pk.content))}
          />
        </React.Suspense>
      );
    }}
  </StoryQuery>
);

export default StoryContent;

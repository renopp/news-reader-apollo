// @flow
import React from 'react';
import {Value} from 'slate';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import AddStoryMutation from '../../components/Mutation/AddStoryMutation';
import Plain from 'slate-plain-serializer';
import Button from '../../core-ui/Button';
import StoriesQuery from '../../components/Query/StoriesQuery';

type Props = RouteComponentProps & {
  title: string,
  value: Value,
};

const WritePage = ({title, value, ...props}: Props) => (
  <AddStoryMutation mutation={AddStoryMutation.mutation}>
    {(insert_story, {loading}) => (
      <Button
        onClick={() => {
          const content = Plain.serialize(value);
          if (content !== '' && title !== '') {
            const stringifiedValue = JSON.stringify(value.toJSON());
            insert_story({
              variables: {
                title,
                content: stringifiedValue,
                userId: 'f21556ee-9b2b-4824-ad55-935d7bd4caa6',
              },
              optimisticResponse: {
                __typename: 'story_mutation_response',
                insert_story: {
                  __typename: 'insert_story',
                  returning: [
                    {
                      __typename: 'story',
                      id: 'ulala',
                      title,
                      content: stringifiedValue,
                      user: {
                        __typename: 'user',
                        id: 'id-user',
                        name: 'Test user',
                        email: 'test@mail.com',
                      },
                      created_at: new Date(),
                    },
                  ],
                },
              },
              update: (proxy, {data: {insert_story}}) => {
                const data = proxy.readQuery({query: StoriesQuery.query});
                proxy.writeQuery({
                  query: StoriesQuery.query,
                  data: {
                    ...data,
                    story: [...insert_story.returning, ...data.story],
                  },
                });
              },
            });
            props.history.push('/');
          } else if (title === '' && content === '') {
            // eslint-disable-next-line no-alert
            alert('Provide title and content');
          } else if (title === '') {
            // eslint-disable-next-line no-alert
            alert('Provide title');
          } else {
            // eslint-disable-next-line no-alert
            alert('Provide content');
          }
        }}>
        {loading ? 'Loading...' : 'UPLOAD'}
      </Button>
    )}
  </AddStoryMutation>
);

export default withRouter(WritePage);

// @flow
import * as React from 'react';
import {ApolloConsumer} from 'react-apollo';
import Observer from '@researchgate/react-intersection-observer';
import StoryQuery from '../components/Query/StoryQuery';

type Props = {
  children: React.Node,
  id: string,
  delay?: number,
};

type State = {
  shouldLoadStory: boolean,
};

export default class LoadFullStoryWhenVisible extends React.PureComponent<
  Props,
  State
> {
  timeoutID: TimeoutID;

  static defaultProps = {
    delay: 1000,
  };

  state: State = {
    shouldLoadStory: false,
  };

  componentWillUnmount = () => {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  };

  onChange = (entry: {isIntersecting: boolean}) => {
    // cancel load attempt if it doesn't visible long enough
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    if (entry.isIntersecting) {
      this.timeoutID = setTimeout(() => {
        this.setState({shouldLoadStory: true});
      }, this.props.delay);
    }
  };

  render = () => (
    <ApolloConsumer>
      {client => {
        let shouldNotObserve = this.state.shouldLoadStory;
        try {
          shouldNotObserve = !!client.readQuery({
            query: StoryQuery.query,
            variables: {id: this.props.id},
          });
        } catch (err) {}
        return (
          <Observer
            disabled={shouldNotObserve}
            threshold={[0, 1]}
            onChange={this.onChange}>
            <div style={{width: '100%', height: '100%'}}>
              {this.state.shouldLoadStory ? (
                <StoryQuery
                  query={StoryQuery.query}
                  variables={{id: this.props.id}}>
                  {() => null}
                </StoryQuery>
              ) : null}
              {this.props.children}
            </div>
          </Observer>
        );
      }}
    </ApolloConsumer>
  );
}

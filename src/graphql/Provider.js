// @flow
import React from 'react';

import {ApolloProvider} from 'react-apollo';
import client from './client';

type Props = {store?: any, children: any};

const Provider = (props: Props) => {
  const {children} = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;

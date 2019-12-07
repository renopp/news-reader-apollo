import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {BatchHttpLink} from 'apollo-link-batch-http';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.key || object.id || null,
});

const httpLinkbatch = new BatchHttpLink({
  uri: 'https://news-mock-api.herokuapp.com/v1/graphql',
  batchMax: 1,
  batchInterval: 1,
});

const httpLink = new HttpLink({
  uri: 'https://news-mock-api.herokuapp.com/v1/graphql',
});

const client = new ApolloClient({
  cache,
  link: httpLink,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
  headers: {
    // disable cors preflight
    'content-type': 'text/plain',
  },
});

export default client;

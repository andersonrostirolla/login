import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}/graphql`,
  cache
});

export default client;
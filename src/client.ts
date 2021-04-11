import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({ resultCaching: false });
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}/graphql`,
  cache
});

export default client;
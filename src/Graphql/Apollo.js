import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import { typeDefs, defaults, resolvers } from "./ClientState";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;

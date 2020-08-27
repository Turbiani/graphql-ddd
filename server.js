// EXPRESS
const express = require('express');

// GRAPHQL SERVER - APOLLO ENGINE
const { ApolloServer } = require('apollo-server-express');

// GRAPHQL SCHEMA
const { typeDefs, resolvers } = require('./src/api');

console.log('typeDefs', typeDefs);
console.log('resolvers', resolvers);

// DATABASE OPEN CONNECTION
require('./src/infrastructure/connection')();

// MODEL DEPENDENCIES
const entities = require('./src/entities');

// GRAPHQL START
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => entities,
});

const app = express();
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
});

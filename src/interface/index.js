const { gql } = require('apollo-server-express');
// SCHEMA DEFINITIONS AND RESOLVERS
const {
  typeDefs: authorTypeDefs,
  resolvers: authorResolvers,
} = require('./schema-definition/Author');

const {
  typeDefs: bookTypeDefs,
  resolvers: bookResolvers,
} = require('./schema-definition/Book');

const {
  typeDefs: commentTypeDefs,
  resolvers: commentResolvers,
} = require('./schema-definition/Comment');

// DEFAULT EMPTY ROOT TYPES
const RootTypes = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [
    RootTypes,
    authorTypeDefs,
    bookTypeDefs,
    commentTypeDefs,
  ],
  resolvers: {
    ...authorResolvers.Type,
    ...bookResolvers.Type,
    ...commentResolvers.Type,
    Query: {
      ...authorResolvers.Query,
      ...bookResolvers.Query,
      ...commentResolvers.Query,
    },
    Mutation: {
      ...authorResolvers.Mutation,
      ...bookResolvers.Mutation,
      ...commentResolvers.Mutation,
    },
  },
};

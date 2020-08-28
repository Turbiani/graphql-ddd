const { gql } = require('apollo-server-express');

const {
  CreateAuthor,
  GetAuthor,
} = require('../../application/admin');

const typeDefs = gql`
  """Object Type that represents a Author"""
  type Author {
    id: ID!
    name: String!
    email: String!
    books: [Book!]!
  }

  input AuthorInput {
    name: String!
    email: String!
  }

  extend type Query {
    author(
      id: ID!
    ): Author
  }

  extend type Mutation {
    """Mutation to create a Author"""
    createAuthor(
      author: AuthorInput
    ): Author
  }
`;

const resolvers = {
  Type: {
    Author: {
      id: (parent) => parent._id,
    },
  },
  Query: {
    author: (
      parent,
      args,
      context,
    ) => GetAuthor(context, args),
  },
  Mutation: {
    createAuthor: (
      parent,
      args,
      context,
    ) => CreateAuthor(context, args),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

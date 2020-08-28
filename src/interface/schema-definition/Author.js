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
    books: [ID!]!
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
      id: (root) => root._id,
      books: (root) => root._id,
    },
  },
  Query: {
    author: (
      root,
      data,
      context,
    ) => GetAuthor(context, data),
  },
  Mutation: {
    createAuthor: (
      root,
      data,
      context,
    ) => CreateAuthor(context, data),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

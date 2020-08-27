const { gql } = require('apollo-server-express');

const {
  AddBookComment,
} = require('../../use-cases/readers');

const typeDefs = gql`
  """Object Type that represents a Comment"""
  type Comment {
    id: ID!
    name: String!
    email: String!
    books: [Book!]!
  }

  input CommentInput {
    name: String!
    email: String!
    books: [ID!]!
  }

  extend type Mutation {
    """Mutation to add comment in a Book"""
    addBookComment(
      comment: CommentInput
    ): Boolean
  }
`;

const resolvers = {
  Type: {
    Comment: {
      id: (root) => root._id,
      books: (root) => root._id,
    },
  },
  Query: {},
  Mutation: {
    addBookComment: (
      root,
      data,
      context,
    ) => AddBookComment(context, data),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

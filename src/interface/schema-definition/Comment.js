const { gql } = require('apollo-server-express');

const {
  AddBookComment,
} = require('../../application/readers');

const typeDefs = gql`
  """Object Type that represents a Comment"""
  type Comment {
    id: ID!
    name: String!
    email: String
    text: String!
    book: Book!
  }

  input CommentInput {
    name: String!
    email: String
    text: String!
    book: ID!
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
      id: (parent) => parent._id,
    },
  },
  Query: {},
  Mutation: {
    addBookComment: (
      parent,
      args,
      context,
    ) => AddBookComment(context, args),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

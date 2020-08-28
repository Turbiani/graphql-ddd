const { gql } = require('apollo-server-express');

const {
  UpdateBookTitle,
  CreateBook,
  GetBooks,
  GetBook,
} = require('../../application/librarian');

const typeDefs = gql`
  """Object Type that represents a Book"""
  type Book {
    id: ID!
    title: String!
    isbn: String!
    author: Author!
    comments: [Comment!]
  }

  input BookInput {
    title: String!
    isbn: String!
    author: ID!
  }

  extend type Query {
    book(
      id: ID!
    ): Book

    books(
      title: String!
    ): [Book]
  }

  extend type Mutation {
    """Mutation to create a Book"""
    createBook(
      book: BookInput
    ): Book

    """Mutation to update title of Book"""
    updateBookTitle(
      id: ID!
      title: String!
    ): Book

  }
`;

const resolvers = {
  Type: {
    Book: {
      id: (root) => root._id,
      author: (root) => root._id,
    },
  },
  Query: {
    book: (
      root,
      data,
      context,
    ) => GetBook(context, data),
    books: (
      root,
      data,
      context,
    ) => GetBooks(context, data),
  },
  Mutation: {
    createBook: (
      root,
      data,
      context,
    ) => CreateBook(context, data),
    updateBookTitle: (
      root,
      data,
      context,
    ) => UpdateBookTitle(context, data),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

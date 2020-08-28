const { gql } = require('apollo-server-express');

const {
  UpdateBookTitle,
  CreateBook,
  GetAuthor,
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
      id: (parent) => parent._id,
      author: (
        parent,
        args,
        context,
      ) => GetAuthor(context, { id: parent.author }),
    },
  },
  Query: {
    book: (
      parent,
      args,
      context,
    ) => GetBook(context, args),
    books: (
      parent,
      args,
      context,
    ) => GetBooks(context, args),
  },
  Mutation: {
    createBook: (
      parent,
      args,
      context,
    ) => CreateBook(context, args),
    updateBookTitle: (
      parent,
      args,
      context,
    ) => UpdateBookTitle(context, args),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

const BookRepository = require('../../infrastructure/repositories/BookRepository');

module.exports = (injection, params) => {
  const {
    BookEntity,
  } = Object.assign({}, injection);

  const repository = new BookRepository(BookEntity);
  return repository.update(params.id, { title: params.title }, true);
};

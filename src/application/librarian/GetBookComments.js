const BookRepository = require('../../infrastructure/repositories/CommentRepository');

module.exports = (injection, params) => {
  const {
    CommentEntity,
  } = Object.assign({}, injection);

  const repository = new BookRepository(CommentEntity);
  return repository.find({ book: params.id });
};

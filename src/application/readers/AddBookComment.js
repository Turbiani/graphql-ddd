const CommentRepository = require('../../infrastructure/repositories/CommentRepository');

module.exports = (injection, params) => {
  const {
    CommentEntity,
  } = Object.assign({}, injection);

  const repository = new CommentRepository(CommentEntity);
  return repository
    .create(params.comment)
    .then((result) => !!result._id);
};

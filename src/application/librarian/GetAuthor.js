const AuthorRepository = require('../../infrastructure/repositories/AuthorRepository');

module.exports = (injection, params) => {
  const {
    AuthorEntity,
  } = Object.assign({}, injection);

  const repository = new AuthorRepository(AuthorEntity);
  return repository.findOne(params.id);
};

const Repository = require('./RepositoryBase');

class AuthorRepository extends Repository {
  constructor(entity) {
    super(entity);
    this._entity = entity;
  }
}

module.exports = AuthorRepository;

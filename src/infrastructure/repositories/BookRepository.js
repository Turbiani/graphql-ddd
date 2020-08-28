const Repository = require('./RepositoryBase');

class BookRepository extends Repository {
  constructor(entity) {
    super(entity);
    this._entity = entity;
  }
}

module.exports = BookRepository;

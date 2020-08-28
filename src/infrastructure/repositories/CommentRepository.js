const Repository = require('./RepositoryBase');

class CommentRepository extends Repository {
  constructor(entity) {
    super(entity);
    this._entity = entity;
  }
}

module.exports = CommentRepository;

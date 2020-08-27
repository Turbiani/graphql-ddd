class Repository {
  constructor(entity) {
    if (!entity) throw new Error('Favor informar parâmetros obrigatórios [entity]');
    this._entity = entity;
  }

  count(where = {}) {
    return this._entity
      .countDocuments(where)
      .exec();
  }

  find(where = {}, offset = 0, limit = 1000, selectThisFields = {}, sort = { createdAt: -1 }) {
    return this._entity
      .find(where)
      .skip(offset)
      .limit(limit)
      .sort(sort)
      .select(selectThisFields)
      .exec();
  }

  findOne(id, selectThisFields = {}) {
    return this._entity
      .findOne({ _id: id })
      .select(selectThisFields)
      .exec();
  }

  findOneByQuery(query, selectTheseFields = {}, isCacheable = false) {
    return isCacheable
      ? this._entity
        .findOne(query)
        .select(selectTheseFields)
        .cache({ key: query })
        .exec()
      : this._entity
        .findOne(query)
        .select(selectTheseFields)
        .exec();
  }

  update(id, payload, returnNew = false) {
    return returnNew
      ? this._entity
        .findOneAndUpdate(
          { _id: id },
          { $set: payload },
          { new: true },
        )
        .exec()
      : this._entity
        .updateOne(
          { _id: id },
          { $set: payload },
        ).exec();
  }

  updateMany(ids, payload) {
    return this._entity
      .updateMany(
        { _id: { $in: ids } },
        { $set: payload },
      ).exec();
  }

  create(payload) {
    return this._entity
      .create(payload);
  }

  createMany(payload) {
    return this._entity
      .insertMany(payload);
  }
}

module.exports = Repository;

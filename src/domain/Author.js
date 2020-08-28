const mongoose = require('mongoose');

const { Schema } = mongoose;
const authorSchema = new Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: Schema.Types.ObjectId, ref: 'authors' },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('authors', authorSchema);

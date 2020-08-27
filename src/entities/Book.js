const mongoose = require('mongoose');

const { Schema } = mongoose;
const bookSchema = new Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: Schema.Types.ObjectId, ref: 'authors', required: true },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('books', bookSchema);

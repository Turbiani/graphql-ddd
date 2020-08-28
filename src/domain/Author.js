const mongoose = require('mongoose');

const { Schema } = mongoose;
const authorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('authors', authorSchema);

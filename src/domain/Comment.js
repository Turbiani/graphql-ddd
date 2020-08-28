const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  book: { type: Schema.Types.ObjectId, ref: 'books' },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('comments', commentSchema);

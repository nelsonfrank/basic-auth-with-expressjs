const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
});

module.exports = mongoose.model("Note", noteSchema);

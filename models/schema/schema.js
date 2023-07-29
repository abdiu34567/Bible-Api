const mongoose = require("mongoose");

// Define your Mongoose schema
const schema = new mongoose.Schema({
  book: mongoose.Schema.Types.Mixed,
  chapter: Number,
  verseNum: mongoose.Schema.Types.Mixed,
  verse: String,
});

exports.schema = schema;

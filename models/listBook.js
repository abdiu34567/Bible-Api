const mongoose = require("mongoose");

// Define your Mongoose schema
const Schema = new mongoose.Schema({
  books: mongoose.Schema.Types.Mixed,
});

// Create your Mongoose model
const model = mongoose.model("bookid", Schema);

const listBooks = async () => {
  return await model.find().lean();
};

module.exports = listBooks;

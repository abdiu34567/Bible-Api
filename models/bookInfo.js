const mongoose = require("mongoose");

// Define your Mongoose schema
const schema = new mongoose.Schema({
  book: String,
  totchapter: Number,
  chapters: Object,
});

// Create your Mongoose model
const model = mongoose.model("chapters", schema);

const bookInfoModel = async (bookid) => {
  return await model.findOne({ book: bookid }).lean();
};

module.exports = bookInfoModel;

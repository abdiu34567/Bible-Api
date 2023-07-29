const models = require("../utils/model");

const chapters = async (collection, book, chapter) => {
  const model = models(collection);
  return await model.find({ book, chapter }).lean();
};

module.exports = chapters;

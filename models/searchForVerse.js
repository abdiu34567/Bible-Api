const models = require("../utils/model");

const searchForVerseModel = async (collection, query) => {
  const model = models(collection);

  const searchRegex = new RegExp(`\\b${query}\\b`, "i");

  return await model
    .find({
      verse: {
        $regex: searchRegex,
      },
    })
    .select("-__v -_id")
    .limit(100)
    .lean();
};

module.exports = searchForVerseModel;

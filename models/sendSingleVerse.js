const models = require("../utils/model");

const singleVerseModel = async (collection, book, chapter, verseNum) => {
  const model = models(collection);

  return await model
    .findOne({
      book,
      chapter,
      verseNum: {
        $regex: `(^|[^0-9])${verseNum}(?![0-9])`,
      },
    })
    .select("-__v -_id")
    .lean();
};

module.exports = singleVerseModel;

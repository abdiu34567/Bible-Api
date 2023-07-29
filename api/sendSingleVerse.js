const singleVerseModel = require("../models/sendSingleVerse");

const sendSingleVerse = async (req, res) => {
  try {
    const { version, bookid, chapter, versenum } = req.params;
    const data = await singleVerseModel(version, bookid, chapter, versenum);
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = sendSingleVerse;

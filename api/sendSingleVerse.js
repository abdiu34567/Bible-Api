const singleVerseModel = require("../models/sendSingleVerse");

const sendSingleVerse = async (req, res) => {
  try {
    const { version, bookid, chapter, versenum } = req.params;

    // Input validation
    if (!version || !bookid || !chapter || !versenum) {
      return res.status(400).send({ status: 400, message: "Invalid input" });
    }

    const data = await singleVerseModel(version, bookid, chapter, versenum);
    if (!data) {
      return res.status(404).send({ status: 404, message: "Verse not found" });
    }

    res.status(200).send({ status: 200, message: "Success",version: "1.0", data });

  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = sendSingleVerse;

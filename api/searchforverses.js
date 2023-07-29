const searchForVerseModel = require("../models/searchForVerse");

const searchForVerses = async (req, res) => {
  try {
    const version = req.params.version;
    const searchQuery = req.query.q;
    const data = await searchForVerseModel(version, searchQuery);
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = searchForVerses;

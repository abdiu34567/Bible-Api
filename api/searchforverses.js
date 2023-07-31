const searchForVerseModel = require("../models/searchForVerse");

const searchForVerses = async (req, res) => {
  try {
    const version = req.params.version;
    const searchQuery = req.query.q;

    // Input validation
    if (!version || !searchQuery) {
      return res.status(400).send({ status: 400, message: "Invalid input" });
    }

    const data = await searchForVerseModel(version, searchQuery);
    if (data && data.length === 0) {
      return res.status(404).send({ status: 404, message: "No matching verses found" });
    }

    res.status(200).send({ status: 200, message: "Success",version: "1.0", data });

  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = searchForVerses;

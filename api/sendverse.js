const chapters = require("../models/commonModel");

const sendVerse = async (req, res) => {
  try {
    const { version, bookid, chapter } = req.params;

    // Input validation
    if (!version || !bookid || !chapter) {
      return res.status(400).send({ status: 400, message: "Invalid input" });
    }

    const data = await chapters(version, bookid, chapter);
    if (!data || data.length === 0) {
      return res.status(404).send({ status: 404, message: "Chapter not found or contains no verses" });
    }

    res.status(200).send({ status: 200, message: "Success", version: "1.0", data });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = sendVerse;

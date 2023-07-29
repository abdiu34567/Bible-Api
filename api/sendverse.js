const chapters = require("../models/commonModel");

const sendVerse = async (req, res) => {
  try {
    const { version, bookid, chapter } = req.params;
    const data = await chapters(version, bookid, chapter);
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = sendVerse;

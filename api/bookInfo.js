const bookInfoModel = require("../models/bookInfo");

const bookInfo = async (req, res) => {
  try {
    const bookId = req.params.bookid;
    const data = await bookInfoModel(bookId);
    if (!data) return res.status(404).send({ error: "Book Id not found" });
    const { book, totchapter, chapters } = data;
    res.status(200).send({ book, totchapter, chapters });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = bookInfo;

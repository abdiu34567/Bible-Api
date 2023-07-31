const bookInfoModel = require("../models/bookInfo");

const bookInfo = async (req, res) => {
  try {
    const bookId = req.params.bookid;
    const data = await bookInfoModel(bookId);
    if (!data) {
      return res.status(404).send({ status: 404, message: "Book Id not found", version: "1.0" });
    }
    res.status(200).send({ status: 200, message: "Success", version: "1.0", data });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = bookInfo;

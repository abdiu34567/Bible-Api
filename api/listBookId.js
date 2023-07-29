const listBooks = require("../models/listBook");

const listBookIds = async (req, res) => {
  try {
    const data = await listBooks();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = listBookIds;

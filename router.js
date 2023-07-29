const express = require("express");
const listBookIds = require("./api/listBookId");
const bookInfo = require("./api/bookInfo");
const sendVerse = require("./api/sendverse");
const sendSingleVerse = require("./api/sendSingleVerse");
const searchForVerses = require("./api/searchforverses");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "Welcome, to Our Bible Api, which supports Oromo, Amharic, and English"
  );
});
router.get("/listbookids", listBookIds);
router.get("/book/info/:bookid", bookInfo);
router.get("/verses/:version/:bookid/:chapter", sendVerse);
router.get("/verses/:version/:bookid/:chapter/:versenum", sendSingleVerse);
router.get("/search/:version/verse", searchForVerses);

module.exports = router;

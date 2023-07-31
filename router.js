const express = require("express");
const listBookIds = require("./api/listBookId");
const bookInfo = require("./api/bookInfo");
const sendVerse = require("./api/sendverse");
const sendSingleVerse = require("./api/sendSingleVerse");
const searchForVerses = require("./api/searchforverses");

const router = express.Router();

router.get("/api/v1/", (req, res) => {
  res.send(
    "Welcome, to Our Bible Api, which supports Oromo, Amharic, and English"
  );
});
router.get("/api/v1/listbookids", listBookIds);
router.get("/api/v1/book/info/:bookid", bookInfo);
router.get("/api/v1/verses/:version/:bookid/:chapter", sendVerse);
router.get("/api/v1/verses/:version/:bookid/:chapter/:versenum", sendSingleVerse);
router.get("/api/v1/search/:version/verse", searchForVerses);

module.exports = router;

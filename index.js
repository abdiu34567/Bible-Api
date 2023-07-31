require("./config.js");
const express = require("express"); // require express
const cors = require("cors"); // require cors
const router = require("./router.js");
const mongoose = require("mongoose");

// Connect to your MongoDB database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });

const app = express(); // create express app

app.use(cors()); // allow any origin
app.use(express.json()); // parse json

app.use("/", router);

// start server
const PORT = process.env.PORT || 3000; // set port

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

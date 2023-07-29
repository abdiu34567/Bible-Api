const mongoose = require("mongoose");
const { schema } = require("./schema");

// Create your Mongoose model
const kjvModel = mongoose.model("kjvs", schema);

module.exports = kjvModel;

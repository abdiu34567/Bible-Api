const mongoose = require("mongoose");
const { schema } = require("./schema");

// Create your Mongoose model
const amharaModel = mongoose.model("amharas", schema);

module.exports = amharaModel;

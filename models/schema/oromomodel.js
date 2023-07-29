const mongoose = require("mongoose");
const { schema } = require("./schema");

// Create your Mongoose model
const oromoModel = mongoose.model("oromos", schema);

module.exports = oromoModel;

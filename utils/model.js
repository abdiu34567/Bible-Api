const amharaModel = require("../models/schema/amharamodel");
const kjvModel = require("../models/schema/kjvmodel");
const oromoModel = require("../models/schema/oromomodel");

const models = (collection) => {
  let model;

  if (collection === "kjv") {
    model = kjvModel;
  } else if (collection === "amhara") {
    model = amharaModel;
  } else if (collection === "oromo") {
    model = oromoModel;
  }

  return model;
};

module.exports = models;

const amharaModel = require("../models/schema/amharamodel");
const kjvModel = require("../models/schema/kjvmodel");
const oromoModel = require("../models/schema/oromomodel");

const models = (collection) => {
  let model;

  if (collection === "kjvs") {
    model = kjvModel;
  } else if (collection === "amharas") {
    model = amharaModel;
  } else if (collection === "oromos") {
    model = oromoModel;
  }

  return model;
};

module.exports = models;

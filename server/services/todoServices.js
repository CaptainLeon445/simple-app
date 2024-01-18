const Model = require("../models/todo");

exports.getTodo = async (req, res) => {
  const data = await Model.find();
  return data;
};

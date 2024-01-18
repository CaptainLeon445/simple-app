const express = require("express");
const { getTodos } = require("../controllers/todoControllers");

const Router = express.Router();

Router.route("/").get(getTodos);

module.exports = Router;

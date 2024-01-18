const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const logger = require("./middleware/logger");
const todoRouter = require("./routes/todoRoutes");

const app = express();

// server/setup.js
const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log("Database connected successfully!");
      logger.info("Database connected successfully!");
    })
    .catch((err) => {
      logger.error("Database connection failed!");
    });
};

db();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Gotten successfully!",
  });
});

app.use("/v1/api/todo", todoRouter);

module.exports = app;

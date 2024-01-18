const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

// server/setup.js
async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Database connection failed!");
    });
};

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Gotten successfully!",
  });
});

module.exports = app;

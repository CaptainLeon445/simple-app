const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Todo must have a title"],
    minLength: [5, "The title must have minimum five Characters"],
    maxLength: [30, "The title must have maximum thirty Characters"],
    trim: true,
  },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;

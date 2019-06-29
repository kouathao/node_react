const mongoose = require("mongoose");

// Define Schema. Must have Title and body
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", postSchema);

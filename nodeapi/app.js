const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("DB connected to MongoDB");
});

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`);
});

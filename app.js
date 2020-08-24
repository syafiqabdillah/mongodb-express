const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require('dotenv/config')

const app = express();
const PORT = process.env.PORT || 5000;

// import routes
const postsRoutes = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts', postsRoutes)

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

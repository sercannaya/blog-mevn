// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT // 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// database connection
const URI = process.env.DB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
  }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
  }
);

// routes prefix
app.use("/api/post", require("./routes/routes"));

// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));
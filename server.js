const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri =
  "mongodb+srv://drodz17:1100240605Dr@cluster0.xx1tabo.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("connected to mongoDb");
  })
  .catch((err) => {
    console.log("error connecting to mongoDb", err);
  });

app.listen(port, () => {
  console.log("app is listening to me", port);
});


// vid 11:07

//https://www.youtube.com/watch?v=CloazlUzTro

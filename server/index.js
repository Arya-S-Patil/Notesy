const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));

app.listen(8080, () => {
  console.log("Running on 8080");
});

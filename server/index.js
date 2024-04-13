const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const UsersModel = require("./models/Users");
const jwt = require("jsonwebtoken");
const app = express();
const options = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH",
  credentials: true,
};
const crypto = require("crypto");

const secret = crypto.randomBytes(32).toString("hex");
app.use(express.json());
app.use(cors(options));

const mongo_url = process.env.MONGODB_URL;
async function connect() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.post("/signup", async (req, res) => {
  try {
    const checkDuplicate = await UsersModel.findOne({
      email: req.body.email,
    });
    if (checkDuplicate) {
      res.send({ message: "Email Already Exists" });
    } else {
      const newUser = await UsersModel.create(req.body);
      res.json(newUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const checkUser = await UsersModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (checkUser) {
      jwt.sign(
        { checkUser },
        secret,
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) {
            res.status(500).send({ error: "Internal server error" });
          }
          res.send({ token: token });
        }
      );
    } else {
      res.send({ error: 0 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log("Running on 8080");
});

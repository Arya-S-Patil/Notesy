const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UsersModel = mongoose.model("User", UsersSchema);
module.exports = UsersModel;

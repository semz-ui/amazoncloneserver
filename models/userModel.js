const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add your surname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add your firstname"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database Connected");
  } catch (err) {
    console.log("Error Message:", err);
  }
};

module.exports = connect;

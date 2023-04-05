const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/userRegister");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err.message);
  }
}

connectDB();

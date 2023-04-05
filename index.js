const express = require("express");
const app = express();

// db config
const db = require("./app/configs/config.db");

// view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.urlencoded({ extended: true }));

app.use(require("./app/routes/route.auth"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

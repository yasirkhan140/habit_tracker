// require("dotenv").config();
// conntecing to mongoose

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://0.0.0.0/todo_list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
const db = mongoose.connection;

db.on("error", (e) => {
  console.error.bind(console, "Error connecting mongo db");
});

db.once("open", () => {
  console.log("Connected to Database:: MongoDB");
});

module.exports = db;

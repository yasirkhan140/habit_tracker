// import express
const express = require("express");
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");

// set a view engine and view
// middleware for reuest input
app.use(
  express.urlencoded({
    extended: false,
  })
);

// import static files like css javascipt to server
app.use(express.static("./assets"));

// use express-ejs-layouts
app.use(expressLayout);

// extracts all css and java scirpt to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// get the routes folder
app.use("/", require("./routes/index"));

// set a views engine to view the html file/ejs file.
app.set("view engine", "ejs");
// set the directory of the view file/ejs file
app.set("views", "./views");
// Db Path here
const db = require("./config/mongoose");
db();
// extract a style ,body and layout

// Use Router

// use a static assets

// give a views path
//using router here
// server listen/run on port
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in Starting Server : ${err}`);
  }
  console.log(`Server is running in port ${port}`);
});

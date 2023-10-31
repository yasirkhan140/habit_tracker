// import express
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const expressLayout = require("express-ejs-layouts");

// set a view engine and view
app.set("views engine", "ejs");
app.set("views", "./views");

// Db Path here

// extract a style ,body and layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Use Router
app.use(
  express.urlencoded({
    extended: false,
  })
);

// use a static assets
app.use(express.static("./assets"));
app.use(expressLayout);

//using router here
app.use("/", require("./routes/index"));
// server listen/run on port
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in Starting Server : ${err}`);
  }
  console.log(`Server is running in port ${port}`);
});

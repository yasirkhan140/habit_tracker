// import express
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// server listen/run on port
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in Starting Server : ${err}`);
  }
  console.log(`Server is running in port ${port}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Awesome App.");
});

app.listen(3003, function () {
  console.log("app listening on PORT 3003.");
});

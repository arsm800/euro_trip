var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Testing!");
});

app.listen(3001, function() {
  console.log("Connected!");
});

var express = require("express");
// var db = require("./db/connection.js");
var hbs = require("express-handlebars");
// var mongoose = require("./db/connection");

var app = express();

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res) {
  res.render("app-welcome");
});

app.get("/cities", function(req, res) {
  res.render("cities-index", {
    cities: db.cities
  });
});

app.listen(3001, function() {
  console.log("Connected!");
});

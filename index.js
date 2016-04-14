var express = require("express");
// var db = require("./db/connection.js");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection"); //Makes model from connection.js available; you still neeed to define variable to use on this page, though (see below)//

var City = mongoose.model("City");

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
    City.find({}).then(function(cities) {
      res.render("cities-index", {
        cities: cities
      });
    });
  });

app.get("/cities/:name", function(req, res) {
  City.findOne({name: req.params.name}).then(function(city) {
    res.render("cities-show", {
      city: city
    });
  });
});

app.listen(3001, function() {
  console.log("Connected!");
});

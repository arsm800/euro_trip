var mongoose = require("./connection.js");

var seedData = require("./seeds.json");

var City = mongoose.model("City");

City.remove({}).then(function() {
  City.collection.insert(seedData).then(function() {
    process.exit();
  });
});

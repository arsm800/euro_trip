// var seedData = require("./seeds.json");  //Why do we need to remove?//

var mongoose = require("mongoose");

var citySchema = new mongoose.Schema(
  {
    name: String,
    lodging: String,
    sights_visted: Array
  }
);

mongoose.model("City", citySchema);

mongoose.connect("mongodb://localhost/eurotrip");

// var seedData = require("./seeds.json");

module.exports = mongoose.model("City");

//Theoretically, you could include everything in one file instead of a connection.js and a seed.js.  The general flow is as follows: mongoose library ---> build/define schema ---> create model ---> perform mongo actions on model that empty the database and seed it with seed.json data.//

//Anytime you see "require", this means definitions from another file/directory are being imported.  If a file, "./asdf", if a directory, "directory_name".  module.exports makes information available for other files to "require".  Therefore, another file can only require information stored in the module.exports variable in the "required" file.//

//The seed.js file is what should actually should "seed" the database in mongo.//

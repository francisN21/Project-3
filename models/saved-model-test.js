var mongoose = require("mongoose"),
  Saved = require("./Saved");

var connStr = "mongodb://localhost:27017/saved-model-test";
mongoose.connect(connStr, function (err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

// create a user a new user
var testSaved = new Saved({
  name: "Salesforce Tower",
  location: {
    latitude: "37.7897",
    longitude: "-122.3972",
  },
});
// save user to database
testSaved.save(function (err) {
  if (err) throw err;

  // fetch user and test password verification
  Saved.findOne({ name: "Salesforce Tower" }, function (err, email) {
    if (err) throw err;
  });
});

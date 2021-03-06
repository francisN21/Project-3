var mongoose = require("mongoose"),
  User = require("./User");

var connStr = "mongodb://localhost:27017/user-model-test";
mongoose.connect(connStr, function (err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

// create a user a new user
var testUser = new User({
  email: "jmar777@yahoo.com",
  password: "Password123",
  firstName: "Brandon",
  lastName: "Tabaska",
});
// save user to database
testUser.save(function (err) {
  if (err) throw err;

  // fetch user and test password verification
  User.findOne({ email: "jmar777@yahoo.com" }, function (err, email) {
    if (err) throw err;

    // test a matching password
    email.comparePassword("Password123", function (err, isMatch) {
      if (err) throw err;
      console.log("Password123:", isMatch); // -> Password123: true
    });

    // test a failing password
    email.comparePassword("123Password", function (err, isMatch) {
      if (err) throw err;
      console.log("123Password:", isMatch); // -> 123Password: false
    });
  });
});

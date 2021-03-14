const bcrypt = require("bcrypt");

const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

//Route to get /events to get all the saved events
router.get("/location", (req, res) => {
  db.Saved.find({})
    .then((dbLogEvent) => {
      res.json(dbLogEvent);
    })
    // Gotta catch them errors!
    .catch((err) => {
      res.json(err);
    });
});

// Route for creating a new User
router.post("/user", function (req, res) {
  db.User.create(req.body)
    .then(function (dbUser) {
      // If we were able to successfully create a User, send it back to the client
      res.json(dbUser);
      console.log("saved:" + dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// GET Route for creating a new User
router.get("/user", function (req, res) {
  db.User.find({})
    .then(function (dbUser) {
      // If we were able to successfully create a User, send it back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Route to Create a new Saved Location.
router.post("/location/", function (req, res) {
  db.Saved.create(req.body)
    .then(function (dbSaved) {
      return db.User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { saved: dbSaved._id } }
      );
    })
    .then(function (dbSaved) {
      res.json(dbSaved);
      console.log("saved:" + res.json(dbSaved));
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// router.post("/login", function (req, res) {
//   console.log(req.body);
//   db.User.find({})
//     .then(function (dbUsers) {
//       console.log(dbUsers);
//       const dbUser = dbUsers.find((user) => user.email === req.body.email);
//       console.log(dbUser);
//       bcrypt.compare(req.body.password, dbUser.password).then((isEqual) => {
//         res.json(dbUser);
//       });
//     })
//     .catch(function (err) {
//       // If an error occurred, send it to the client
//     });
// });

router.post("/location/update/", function (req, res) {
  console.log(req.body);
  db.Saved.updateOne({ title: req.body.name }, { $set: req.body.query })
    .then((dbLogEvent) => {
      console.log("event updated"), res.json(dbLogEvent);
    })
    // Gotta catch all them errors!
    .catch((err) => {
      res.json(err);
    });
});


// DELETE /events/:id by id for deleting an event from the database
router.delete("/location/:id", (req, res) => {
  // console.log(req.params.id)
  // Using the LogEvent Database in the Events Models File
  db.Saved.deleteOne({ _id: req.params.id })
    .then((dbLogEvent) => {
      console.log("event deleted"), res.json(dbLogEvent);
    })
    // Gotta catch all them errors!
    .catch((err) => {
      res.json(err);
    });
});

// SEAN'S TEST POST ROUTE FOR WHEN NO USER ID
// Route for creating a new Event
// router.post("/location/", (req, res) => {
//   // Set event to a new variable
//   const newEvent = req.body;
//   console.log(newEvent)
//   console.log("line 118")
//   // Using the LogEvent Database in the Events Models File
//   db.Saved.create(newEvent)
//     .then((dbLogEvent) => {
//       // Let the user know that the event was saved
//       console.log("Event Saved"), res.json(dbLogEvent);
//     })
//     // Gotta catch them errors!
//     .catch((err) => {
//       res.json(err);
//     });
// });



module.exports = router;

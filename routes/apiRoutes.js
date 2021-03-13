const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

//Route to get /events to get all the saved events
router.get("/events", (req, res) => {
  // Using the LogEvent Database in the Events Models File
  db.LogEvent.find({})
    .then((dbLogEvent) => {
      res.json(dbLogEvent);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Route for creating a new Event
router.post("/events", (req, res) => {
  const newEvent = req.body;
  db.LogEvent.create(newEvent)
    .then((dbLogEvent) => {
      console.log("Event Saved"), res.json(dbLogEvent);
    })
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
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// DELETE /events/:id by id for deleting an event from the database
router.delete("/events/:id", (req, res) => {
  // console.log(req.params.id)
  db.LogEvent.deleteOne({ "_id": req.params.id })
    .then(dbLogEvent => {
      console.log("event deleted"),
        res.json(dbLogEvent)
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router;

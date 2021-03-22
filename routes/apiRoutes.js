const bcrypt = require("bcrypt");
const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

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
    .then((dbUser) => {
      // If we were able to successfully create a User, send it back to the client
      res.json(dbUser);
      console.log("saved:" + dbUser);
    })
    .catch((err) => {
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
// Comented out until there is a user ID from authentication
//Route to Create a new Saved Location.
// router.post("/location/", function (req, res) {
//   db.Saved.create(req.body)
//     .then(function (dbSaved) {
//       return db.User.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { saved: dbSaved._id } }
//       );
//     })
//     .then(function (dbSaved) {
//       res.json(dbSaved);
//       console.log("saved:" + res.json(dbSaved));
//     })
//     .catch(function (err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// router.post("/login", function (req, res) {
//   console.log(req.body.password, "apiRoutes line 69");
//   db.User.find({})
//     .then(function (dbUsers) {
//       // console.log(dbUsers);
//       const dbUser = dbUsers.find((user) => user.email === req.body.email);
//       console.log(dbUser, "from apiRoutes.js  74");
//       console.log(req.body.password, dbUser.password, "line 75");
//       bcrypt.compare(req.body.password, dbUser.password).then((isEqual) => {
//         req.session.isLoggedIn = isEqual;
//         req.session.user = dbUser;
//         return req.session.save((err) => {
//           if (err) throw err;
//           res.json(dbUser);
//         });
//       });
//     })
//     .catch(function (err) {
//       console.log(err);
//       // If an error occurred, send it to the client
//     });
// });

//route for getting login data that has been stored
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Not everything has been filled" });
    }

    const user = await db.User.findOne({ email: email });

    console.log("user:", user);

    if (!user) {
      return res.status(400).json({ msg: "no user found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

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

router.post("/user/update/", function (req, res) {
  console.log(req.body);
  db.User.updateOne({ username: req.body.name }, { $set: req.body.query })
    .then((dbLogEvent) => {
      console.log("event updated"), res.json(dbLogEvent);
    })
    // Gotta catch all them errors!
    .catch((err) => {
      res.json(err);
    });
});

router.post("/user/update/", function (req, res) {
  console.log(req.body);
  db.User.updateOne({ username: req.body.name }, { $set: req.body.query })
    .then((dbLogEvent) => {
      console.log("event updated"), res.json(dbLogEvent);
    })
    // Gotta catch all them errors!
    .catch((err) => {
      // If an error occurred, send it to the client
      console.log(err);
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
router.post("/location/", (req, res) => {
  // Set event to a new variable
  const newEvent = req.body;
  console.log("hello : ", req.user);
  console.log("line 118");
  // Using the LogEvent Database in the Events Models File
  db.Saved.create({ ...newEvent, authorID: req.user })
    .then((dbSaved) => {
      // Let the user know that the event was saved
      console.log("Event Saved"), res.json(dbSaved);
    })
    // Gotta catch them errors!
    .catch((err) => {
      res.json(err);
    });
});

// PUT route for updating Event
router.put("/location/:id", (req, res) => {
  // console.log(req.params.id)
  // console.log(req.body)
  // console.log(req.body.location[0].latitude)

  // Update One by the ID
  db.Saved.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      special: req.body.special,
      description: req.body.description,
      category: req.body.category,
      location: [
        {
          latitude: req.body.location[0].latitude,
          longitude: req.body.location[0].longitude,
        },
      ],
      date: req.body.date,
      timestamp: req.body.timestamp,
    }
  )
    // then JSON it and console log it
    .then((dbSaved) => {
      console.log(dbSaved), res.json(dbSaved);
    });
});

// router.get("/", auth, (req, res) => {
//   console.log(req.user);
//   res.send("success");
// });

router.get("/", auth, (req, res) => {
  try {
    const user = db.User.findById(req.user)
    res.json({
      username: user.username,
      id: user._id
    })
  } catch (err) {
    res.send(err.response)
  }

})

// DELETE /User/:id by id for deleting a user from the database
router.delete("/user/:id", (req, res) => {
  // console.log(req.params.id)
  // Using the User Collection
  db.User.deleteOne({ _id: req.params.id })
    .then((dbUser) => {
      console.log("user deleted"), res.json(dbUser);
    })
    // Gotta catch all them errors!
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;

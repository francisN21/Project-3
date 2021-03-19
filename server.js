// Required Consts!
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");

//Port 5000 cause I'm crazy!
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Optimize for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "secret" }));

// API Routes start with API and live at apiRoutes.js
app.use("/api", require("./routes/apiRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Let the user know the server is running, and which port.  Yeay!
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

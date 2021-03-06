// Required Consts!
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Port 5000 cause I'm crazy!
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Optimize for Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Let the user know the server is running, and which port.  Yeay!
app.listen(PORT, () => {
    console.log(`listening at http://localhost${PORT}`);
});
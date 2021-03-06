const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SavedSchema = new Schema({
    name: String,
    location: [{
        latitude: String,
        longitude: String,
    }],
    description: String,
});

const Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved
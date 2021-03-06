const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SavedSchema = new Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    description: String,
});

const Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved
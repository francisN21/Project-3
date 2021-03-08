const mongoose = require("mongoose");

function isLatitude(maybeLat) {
    var latF = parseFloat(maybeLat);
    if (isNaN(latF)) return false;
    return latF >= -90 && latF <= 90;
}

function isLongitude(maybeLon) {
    var lonF = parseFloat(maybeLon);
    if (isNaN(lonF)) return false;
    return lonF >= -180 && lonF <= 180;
}

const Schema = mongoose.Schema;

const SavedSchema = new Schema({
    name: {
        type: String,
        required: [true, "You must enter a name."],
    },
    location: [
        {
            latitude: {
                type: Number,
                validate: isLatitude,
                required: [true, "You must enter a latitude."],
            },
            longitude: {
                type: Number,
                validate: isLongitude,
                required: [true, "You must enter a longitude."],
            },
        },
    ],
    description: {
        type: String,
        required: false,
    },
});

const Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;

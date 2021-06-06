// Saved collection for saving new events!
const mongoose = require("mongoose");
// Check the latitude
function isLatitude(maybeLat) {
  var latF = parseFloat(maybeLat);
  if (isNaN(latF)) return false;
  return latF >= -90 && latF <= 90;
}
// Check the longitude 
function isLongitude(maybeLon) {
  var lonF = parseFloat(maybeLon);
  if (isNaN(lonF)) return false;
  return lonF >= -180 && lonF <= 180;
}
// Set up schema
const Schema = mongoose.Schema;
// Saved Schema for each event
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
  special: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: [true, "You must enter a category."],
  },
  private: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    min: "2021-01-28",
    max: "2023-05-23",
  },
  // Author Id for each users events
  authorID: {
    type: String,
  },
});

const Saved = mongoose.model("Saved", SavedSchema);
// Export it all!
module.exports = Saved;

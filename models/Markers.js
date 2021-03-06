const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logMarkerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,

    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      required: true,
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const LogMarker = mongoose.model("LogMarker", logMarkerSchema);

module.exports = LogMarker;

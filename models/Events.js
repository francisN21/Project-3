const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEventSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const LogEvent = mongoose.model("LogEvent", logEventSchema);

module.exports = LogEvent;

const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
    },
    eventUrl: {
      type: String,
    },
    eventType: {
      type: String,
    },
    name: {
      type: String,
    },
    attending: {
      type: Boolean,
      default: false,
    },
    liked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

Event = mongoose.model("Event", EventSchema);

module.exports = Event;

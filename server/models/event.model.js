const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      requierd: true,
    },
    eventUrl: {
      type: String,
      requierd: true,
    },
    eventType: {
      type: String,
      requierd: true,
    },
    name: {
      type: String,
      requierd: true,
    },
    attending: {
      type: Boolean,
      default: false,
      requierd: true,
    },
    // liked: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
);

Event = mongoose.model("Event", EventSchema);

module.exports = Event;

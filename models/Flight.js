const mongoose = require("mongoose");

const FlightSchema = mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  company: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Flights", FlightSchema);

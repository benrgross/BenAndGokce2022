const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  RSVP: false,
  no: false,
  maybe: false,
  plus_1: false,
});

const Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wedding");

const guestSeed = [
  {
    first_name: "Kyle",
    last_name: "Bouquet",
    email: "kylebouquet@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
  },
];

db.Guest.remove({})
  .then(() => db.Guest.collection.insertMany(guestSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

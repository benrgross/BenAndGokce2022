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
    plus_1: true,
  },
  {
    first_name: "Claire",
    last_name: "Gross",
    email: "cgross@students.pitzer.edu",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Madison",
    last_name: "Chao",
    email: "madisonschao@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Dylan",
    last_name: "Markus",
    email: "dylanjaymarkus@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Kira",
    last_name: "King",
    email: "arikmk@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Brooke",
    last_name: "Taylor",
    email: "brookeellentaylor@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Quinn",
    last_name: "Sherman",
    email: "quinn.msherman@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Justin",
    last_name: "Wooley",
    email: "woolleyjustin@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Brandon",
    last_name: "Staudinger",
    email: "staudinger.brandon@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Jordan",
    last_name: "Isken",
    email: "isken.jordan@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Sam",
    last_name: "Hemmenway",
    email: "samhemmenway@icloud.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Cameron",
    last_name: "Sharp",
    email: "cameron.douglas.sharp@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Mike",
    last_name: "O'Brien",
    email: "mtobrien89@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
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

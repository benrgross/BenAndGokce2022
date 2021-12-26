const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wedding");

const adminSeed = {
  username: "admin",
  password: "process.env.ADMIN_PASSWORD",
};

const guestSeed = [
  {
    first_name: "Ben",
    last_name: "Gross",
    email: "benrgross@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },

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
    RSVP: true,
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
  {
    first_name: "Henry",
    last_name: "Lievsay",
    email: "henryjlievsay@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Alec",
    last_name: "Gross",
    email: "alecgross@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Neil",
    last_name: "Gross",
    email: "gross.neil@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Jim",
    last_name: "Fields",
    email: "gross.neil@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Michael",
    last_name: "Kulukundis",
    email: "mckulukundis@gmail",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Michael",
    last_name: "Kulukundis",
    email: "mckulukundis@gmail",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Jake",
    last_name: "Gross",
    email: "jkgrss@gmail.com",
    RSVP: true,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Lisa",
    last_name: "Gross",
    email: "faircurve@icloud.com",
    RSVP: true,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Adam",
    last_name: "Gross",
    email: "faircurve@icloud.com",
    RSVP: true,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Goga",
    last_name: "Bouquet",
    email: "Goga@jiti.us",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Miguel",
    last_name: "Bouquet",
    email: "bouquetgato@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Jill",
    last_name: "Gross",
    email: "jillgross.wildware@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Scott",
    last_name: "Shetler",
    email: "scottywotty@earthlink.net",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: false,
  },
  {
    first_name: "Eric",
    last_name: "Camiel",
    email: "ecamiel@snet.net",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Ian",
    last_name: "Moffit",
    email: "ianmoffitt8@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Jeff",
    last_name: "Colgan",
    email: "patrickcolgan@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Ben",
    last_name: "Watson",
    email: "benjamincwatson@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
  {
    first_name: "Johnathan",
    last_name: "Fields",
    email: "ja.jonathan@gmail.com",
    RSVP: false,
    no: false,
    maybe: false,
    plus_1: true,
  },
];

db.Admin.remove({})
  .then(() => db.Admin.collection.insertMany(adminSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

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

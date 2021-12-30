const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Guest.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log(req.body);
    db.Guest.findOne({ email: req.body.email })
      .then((dbModel) => res.json(dbModel))
      .catch((error) => res.status(422).json(error));
  },
  update: async function (req, res) {
    try {
      const guest = await db.Guest.findOneAndUpdate(
        { email: req.body.email },
        { $set: { RSVP: req.body.RSVP, no: req.body.no } },
        { new: true }
      );

      res.json(guest);
      // res.json(guest);
    } catch {
      res.status(422).json(err);
    }
  },

  updatePlus1: async function (req, res) {
    console.log(req.body);
    try {
      const plus1 = await db.Guest.findOneAndUpdate(
        { email: req.body.email },
        {
          $push: {
            plus1_info: {
              rsvp: req.body.RSVP,
              no: req.body.no,
              first_name: req.body.firstName,
              last_name: req.body.lastName,
              email: req.body.guestEmail,
            },
          },
        },
        { new: true }
      );

      res.json(plus1);
    } catch (err) {
      console.log(err);
    }
  },
};

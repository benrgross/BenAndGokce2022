const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Guest.findAll()
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
        { $set: { RSVP: req.body.RSVP, no: req.body.no } }
      );

      const newGuest = await db.Guest.findOne({ email: req.body.email });
      res.json(newGuest);
      // res.json(guest);
    } catch {
      res.status(422).json(err);
    }
  },
};

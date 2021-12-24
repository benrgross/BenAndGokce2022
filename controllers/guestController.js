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
    try {
      const plus1 = await db.Guest.findOneAndUpdate(
        { email: req.body.email },
        {
          $set: {
            RSVP_plus1: req.body.rsvp1,
            "plus1_info.$.first_name": req.body.firstName,
            "plus1_info.$.last_name": req.body.lastName,
            "plus1_info.$.email": req.body.guestEmail,
          },
        },
        { new: true }
      );
      const newGuest = await db.Guest.findOne({ email: req.body.email });
      res.json(newGuest);
    } catch {}
  },
};

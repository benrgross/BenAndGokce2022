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
  update: function (req, res) {
    db.Guest.findOneAndUpdate({ last_name: req.body.lastName }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Guest.findAll()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.Guest.find({
      $or: [
        { "name.first": { $regex: req.body.firstName, $options: "-i" } },
        { "name.last": { $regex: req.body.lastName, $options: "-i" } },
      ],
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Guest.findOneAndUpdate({ last_name: req.body.lastName }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

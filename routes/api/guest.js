const router = require("express").Router();
const guestController = require("../../controllers/guestController");

router
  .route("/")
  .get(guestController.findAll)
  .post(guestController.findOne)
  .put(guestController.update);

module.exports = router;

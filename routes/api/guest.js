const router = require("express").Router();
const guestController = require("../../controllers/guestController");

router
  .route("/")
  .get(guestController.findAll)
  .post(guestController.findOne)
  .put(guestController.update);

router.route("/plus1").put(guestController.updatePlus1);

router.route("/findAll").get(guestController.findAll);

module.exports = router;

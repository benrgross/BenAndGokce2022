const router = require("express").Router();
const guestController = require("../../controllers/guestController");

router.route("/").get(guestController.findAll).post(plantContoller.create);

router.route("/:id").get(plantContoller.findOne).put(plantContoller.update);

module.exports = router;

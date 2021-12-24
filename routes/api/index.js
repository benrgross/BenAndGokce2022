const router = require("express").Router();
const guestRoutes = require("./guest");

router.use("/guests", guestRoutes);

module.exports = router;

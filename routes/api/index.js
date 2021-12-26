const router = require("express").Router();
const guestRoutes = require("./guest");
const authRoutes = require("./auth");

router.use("/guests", guestRoutes);
router.use("/auth", authRoutes);

module.exports = router;

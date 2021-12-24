const router = require("express").Router();
const guestRoutes = require("./api/guest");

router.use("/guests", guestRoutes);

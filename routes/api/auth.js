const router = require("express").Router();
const db = require("../../models");
const JWT = require("jsonwebtoken");
const passport = require("../../authentication/passport");

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, admin, info) => {
    try {
      if (err || !admin) {
        const error = new Error("incorrect password");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: admin._id, username: admin.username };
        const token = JWT.sign(user.toJSON(), process.env.PASSPORT_SECRET);

        res.json({ admin: admin.username, token: token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);
module.exports = router;

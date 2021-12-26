const router = require("express").Router();
const db = require("../../models");
const JWT = require("jsonwebtoken");
const passport = require("../../authentication/passport");

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");
        console.log(info);

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, username: user.username };
        const token = JWT.sign(user.toJSON(), process.env.PASSPORT_SECRET);

        res.json({ username: user.username, token: token });
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

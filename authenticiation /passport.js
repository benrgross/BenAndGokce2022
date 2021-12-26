const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const admin = await db.Admin.create({ username, password });

        return done(null, admin);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const admin = await db.Admin.findOne({ username });

        if (!admin) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await admin.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, admin, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "process.env.PASSPORT_SECRET",
    },

    async function (jwtPayload, cb) {
      const admin = await db.Admin.find({ _id: jwtPayload });
      try {
        return cb(null, admin);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

module.exports = passport;

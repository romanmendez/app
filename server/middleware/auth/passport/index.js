const passport = require("passport");
const User = require("../../../models/User.model");
require("./strategies/local");

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then((user) => cb(null, user))
    .catch((e) => cb(e));
});

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
};

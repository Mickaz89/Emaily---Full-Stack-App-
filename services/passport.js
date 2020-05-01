const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is the id from Mongo
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
          console.log("PROFILE" , profile);
          console.log("USER" + existingUser);
          console.log("USER TOKEN" +  existingUser.token);
          console.log("REFRESH TOKEN" + refreshToken);
          console.log("ACCESS TOKEN" + accessToken);
        done(null, existingUser);
      } else {
        const user = await new User({ googleId: profile.id, token: accessToken, name:profile.displayName }).save();
        done(null, user);
      }
    }
  )
);

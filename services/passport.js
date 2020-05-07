const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");
const Admin = mongoose.model("admins");


// passport.serializeUser(Admin.serializeUser());
// passport.deserializeUser(Admin.deserializeUser());
//
// passport.serializeUser((user, done) => {
//   done(null, user.id); //user.id is the id from Mongo
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });


// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });

passport.serializeUser((user, done) => {
    done(null, user.id); //user.id is the id from Mongo
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {done(null, user)
            .catch((err) => done('pass'));
  });
    });

passport.deserializeUser((obj, done) => {
    Admin.deserializeUser();
});


passport.use('google',
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
        const user = await new User({ role:'User',googleId: profile.id, token: accessToken, name:profile.displayName }).save();
        done(null, user);
      }
    }
  )
);

passport.use('local', new LocalStrategy(Admin.authenticate()));


const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const getReq = require("../services/getReq");
const User = mongoose.model("users");

module.exports = app => {

    //AUTH USERS
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );

  // AUTH ADMIN
  app.post('/api/admin/register', function(req, res) {
      const Users=new User({role:'Admin', email: req.body.email, username : req.body.username});
      User.register(Users, req.body.password, function(err, user) {
          if (err) {
              res.json(err)
          }else{
              res.json({success: true, message: "Your account has been saved"})
          }
      });
  });

  // app.post('/login', passport.authenticate(['local', 'google'], {
  //       successReturnToOrRedirect: '/',
  //       failureRedirect: '/'
  //   }));

  app.post('/api/admin/login', function(req, res, next) {
      passport.authenticate('local', function(err, user, info) {
          if (err) { return res.send(info); }
          if (!user) { return res.send(info); }
          req.logIn(user, function(err) {
              if (err) { return res.send(info); }
              return res.send(user.username);
          });
      })(req, res, next);
  });


  app.get("/api/admin/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/admin/current_user", (req, res) => {
      console.log('USER ', req.user);
    res.send(req.user);
  });
};

const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Admin = mongoose.model("admins");
const keys = require("../config/keys");



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
  app.post('/register', function(req, res) {
      const Admins=new Admin({role:'Admin', email: req.body.email, username : req.body.username});
      Admin.register(Admins, req.body.password, function(err, user) {
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

  app.post('/admin/login', function(req, res, next) {
      passport.authenticate('local', function(err, user, info) {
          if (err) { return res.send(info); }
          if (!user) { return res.send(info); }
          req.logIn(user, function(err) {
              if (err) { return res.send(info); }
              return res.send(user.username);
          });
      })(req, res, next);
  });


  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

const passport = require("passport");

const router = require("express").Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/auth/google/callback", passport.authenticate("google"));

module.exports = router;

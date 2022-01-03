const router = require("express").Router();
const {
  logoutController,
  signUpController,
  signInController,
} = require("./auth.controller");

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.post("/logout", logoutController);

module.exports = router;

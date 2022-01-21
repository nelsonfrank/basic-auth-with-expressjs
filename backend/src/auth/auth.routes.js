const router = require("express").Router();
const { verifyToken } = require("../middleware/auth");
const {
  logoutController,
  signUpController,
  signInController,
  getUserController,
} = require("./auth.controller");

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.post("/logout", logoutController);

// Get user information
router.get("/user", verifyToken, getUserController);

module.exports = router;

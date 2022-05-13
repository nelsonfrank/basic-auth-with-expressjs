const router = require("express").Router();
const { Auth } = require("../../middleware/auth");
const { verifyToken } = require("../../middleware/jwt");
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
router.get("/user", verifyToken, Auth, getUserController);

module.exports = router;

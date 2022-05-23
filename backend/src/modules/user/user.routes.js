const router = require("express").Router();
const { Auth } = require("../../middleware/auth");
const { verifyToken } = require("../../middleware/jwt");
const UserController = require("./user.controler");

router.get("/users", verifyToken, Auth, UserController.getAllUsers);

router.get("/users/:id", verifyToken, Auth, UserController.getUserById);

router.patch("/users/:id", verifyToken, Auth, UserController.updateUser);

// TODOS
// Add tag to user model,
// to prevent disabled user from accessing their account.

// router.patch(
//   "/users/:id",
//   verifyToken,
//   Auth,
//   UserController.disableUserAccount
// );

module.exports = router;

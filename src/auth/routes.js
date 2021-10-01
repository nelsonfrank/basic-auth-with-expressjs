const router = require("express").Router();

router.post("/signup", (req, res) => {
	res.send("Signup Route");
});

router.post("/signin", (req, res) => {
	res.send("Signin Route");
});

module.exports = router;

const router = require("express").Router();
const UserModel = require("./auth.model");
const bcrypt = require("bcrypt");
const { signUpValidation } = require("../validation/auth");

router.post("/signup", async (req, res) => {
	console.log(req.body);
	// validate client payload
	const { error } = signUpValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// check if email exist
	const emailExist = await UserModel.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exist");

	// Encrypting password
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const user = new UserModel({ ...req.body, password: hashedPassword });

	user
		.save()
		.then(() => {
			res.status(201).json({
				userId: user._id,
				status: "success",
				message: "user created successfully",
			});
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

router.post("/signin", (req, res) => {
	res.send("Signin Route");
});

module.exports = router;

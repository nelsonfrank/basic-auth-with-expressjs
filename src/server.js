require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bootStrapApp = async () => {
	app = express();

	// body-parser middleware
	app.use(express.json());

	// Auth routes
	app.use("/auth", require("./auth/auth.routes"));

	try {
		// Connect to the MongoDB cluster
		await mongoose.connect(
			process.env.DATABASE_URL,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			() => console.log("Database is connected")
		);
	} catch (e) {
		console.log("Database failed to connect");
	}

	const PORT = process.env.PORT || 3000;

	app.listen(PORT, () => {
		console.log(`server started at Port ${PORT}`);
	});
};

bootStrapApp();

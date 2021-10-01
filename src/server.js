require("dotenv").config();
const express = require("express");

app = express();

// Auth routes
app.use("/auth", require("./auth/routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`server started at Port ${PORT}`);
});

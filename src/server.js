require("dotenv").config();
const express = require("express");

app = express();

const PORT = process.env.PORT || 3000;

app.listen(3300, () => {
	console.log(`server started at Port ${PORT}`);
});

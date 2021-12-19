require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

app = express();

// cors
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// body-parser middleware
app.use(express.json());

// Auth routes
app.use("/auth", require("./auth/auth.routes"));

// 404 Error Handler
app.use((req, res, next) => {
  res.status(400).send("Not found");
});

// 500 Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
});

// Database connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected successfully"))
  .catch((error) => console.log(error));

// PORT
const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
  console.log(`server started at Port ${PORT}`);
});

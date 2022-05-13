require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { verifyToken } = require("./middleware/jwt");

const app = express();

// cors
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// body-parser middleware
app.use(express.json());
/**
 * Parse Cookie header and populate req.cookies with
 *  an object keyed by the cookie names.
 */
app.use(cookieParser());

// Auth routes
app.use("/auth", require("./modules/auth/auth.routes"));
app.use("/api", require("./modules/note/note.routes"));

app.get("/", verifyToken, (req, res) => {
  res.send("Hello, world!");
});

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

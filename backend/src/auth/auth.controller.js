const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./auth.model");
const { signUpValidation, signInValidation } = require("../validation/auth");
const { createTokens } = require("../utils/jwt.utils");
const config = process.env;

exports.signUpController = async (req, res) => {
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
};

exports.signInController = async (req, res) => {
  // validate client payload
  const { error } = signInValidation();
  if (error) return res.status(400).send(error.details[0].message);

  // check if user exists
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password is wrong!");

  const { password, ...other } = user._doc;
  UserModel.find({ email: req.body.email })
    .then(async (doc) => {
      if (await bcrypt.compare(req.body.password, doc[0].password)) {
        const [authToken, refreshToken] = await createTokens(
          other,
          config.TOKEN_SECRET,
          config.REFRESH_TOKEN_SECRET
        );
        res
          .status(200)
          .cookie("auth_token", authToken, { sameSite: "lax", httpOnly: true })
          .cookie("refresh_token", refreshToken, {
            sameSite: "lax",
            httpOnly: true,
          })
          .json({ ...other, status: "logged-in" });
      } else {
        res.status(400).send("Fail to login in");
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.logoutController = async (req, res) => {
  res
    .status(200)
    .clearCookie("auth_token")
    .clearCookie("refresh_token")
    .json({ status: "logged-out" });
};

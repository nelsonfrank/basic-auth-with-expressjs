const jwt = require("jsonwebtoken");
const Mongoose = require("mongoose");
const _ = require("lodash");

const createTokens = async (user, authTokenSecret, refreshTokenSecret) => {
  const createToken = jwt.sign(
    {
      ..._.pick(user, ["_id", "username", "email", "roles"]),
    },
    authTokenSecret,
    {
      expiresIn: "1m",
    }
  );

  const createRefreshToken = jwt.sign(
    {
      userId: _.pick(user, "_id"),
    },
    refreshTokenSecret,
    {
      expiresIn: "7d",
    }
  );

  return Promise.all([createToken, createRefreshToken]);
};

const refreshTokens = async (refreshToken, models, SECRET, SECRET_2) => {
  let userId = -1;
  try {
    const payload = jwt.decode(refreshToken);
    userId = payload.userId._id;
  } catch (err) {
    return err;
  }

  if (!userId) {
    return {};
  }

  const user = await models.findOne({ _id: userId });

  if (!user) {
    return {};
  }

  try {
    jwt.verify(refreshToken, SECRET_2);
  } catch (err) {
    return err;
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    SECRET_2
  );
  const { password, ...others } = user;
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user: others._doc,
  };
};;

module.exports = {
  refreshTokens,
  createTokens,
};

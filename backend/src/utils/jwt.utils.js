const jwt = require("jsonwebtoken");
const Mongoose = require("mongoose");
const _ = require("lodash");

const createTokens = async (user, authTokenSecret, refreshTokenSecret) => {
  const createToken = jwt.sign(
    {
      ..._.pick(user, ["_id", "username", "email"]),
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
    const { userId: id } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return err;
  }

  if (!userId) {
    return {};
  }

  const user = await models.findOne({ _id: Mongoose.Types.ObjectId(userId) });

  if (!user) {
    return {};
  }

  const refreshSecret = SECRET_2 + user.password;

  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    return err;
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    refreshSecret
  );
  const { password, ...others } = user;
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user: others,
  };
};

module.exports = {
  refreshTokens,
  createTokens,
};

const jwt = require("jsonwebtoken");
const { refreshTokens } = require("../utils/jwt.utils");
const UserModel = require("../auth/auth.model");

const config = process.env;

const verifyToken = async (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(403).send("Unauthorized request, need to login first");
  }
  try {
    const payload = jwt.verify(token, config.TOKEN_SECRET);
    req.user = payload;
  } catch (err) {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
      return res.status(403).send("Invalid refresh token");
    }

    const newTokens = await refreshTokens(
      refreshToken,
      UserModel,
      config.TOKEN_SECRET,
      config.REFRESH_TOKEN_SECRET
    );
    console.log(newToken);
    if (newTokens.token && newTokens.refreshToken) {
      const { token, refreshToken, user } = newTokens;
      res.cookie("auth_token", token, { sameSite: "lax", httpOnly: true });
      res.cookie("refresh_token", refreshToken, {
        sameSite: "lax",
        httpOnly: true,
      });
      req.user = user;
    } else {
      return res.status(401).send("Invalid Token");
    }
  }
  return next();
};

module.exports = { verifyToken };

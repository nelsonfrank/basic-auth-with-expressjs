const { defineAbilitiesFor } = require("../config/abilities");

async function Auth(req, res, next) {
  const ANONYMOUS_ABILITY = defineAbilitiesFor(null);

  req.ability = req.user
    ? defineAbilitiesFor(req.user)
    : ANONYMOUS_ABILITY;

  return next();
}

module.exports = {
  Auth,
};

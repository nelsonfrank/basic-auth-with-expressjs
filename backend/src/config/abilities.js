const { AbilityBuilder, Ability, defineAbility } = require("@casl/ability");
const { ROLES } = require("../utils");

function defineAbilitiesFor(user) {
  return defineAbility((can) => {
    can("read", "Note");
    can("create", "User");

    if (user) {
      if (user.roles.includes(ROLES.ADMIN)) {
        can("manage", "all");
      }

      if (user.roles.includes(ROLES.BASIC)) {
        can(["create", "delete", "update"], "Note", {
          author: user._id,
        });
        can(["read", "update"], "User", { _id: user.id });
      }
    }
  });
}

module.exports = {
  defineAbilitiesFor,
};

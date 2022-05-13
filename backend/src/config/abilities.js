const { defineAbility } = require("@casl/ability");
const { ROLES } = require("../utils");

const PERMISSIONS = {
  MANAGE: "manage",
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete",
};

const MODEL_NAMES = { NOTE: "Note", USER: "User" };

function defineAbilitiesFor(user) {
  return defineAbility((can) => {
    can("read", "Note");
    can("create", "User");

    if (user) {
      if (user.roles.includes(ROLES.ADMIN)) {
        can("manage", "all");
      }

      if (user.roles.includes(ROLES.BASIC)) {
        can("create", "Note");
        can("update", "Note", { authorId: user.id });
        can("delete", "Note", { authorId: user.id });
        can("read", "User", { _id: user.id });
        can("update", "User", { _id: user.id });
      }
    }
  });
}

module.exports = {
  defineAbilitiesFor,
  PERMISSIONS,
  MODEL_NAMES,
};

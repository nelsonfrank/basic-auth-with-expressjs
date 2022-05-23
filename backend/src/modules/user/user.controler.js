const User = require("./user.model");
const { ForbiddenError } = require("@casl/ability");
const { PERMISSIONS, MODEL_NAMES } = require("../../config/abilities");

const UserController = {
  getAuthUserController: async (req, res) => {
    try {
      const { password, ...other } = req.user;
      res.status(200).json(other);
    } catch (error) {
      console.log(error);
    }
  },
  getAllUsers: (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.READ,
        MODEL_NAMES.USER
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    User.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getUserById: (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.READ,
        MODEL_NAMES.USER
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    User.findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) =>
        res.status(404).send(`User with id ${req.params.id} not found`)
      );
  },

  updateUser: async (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.UPDATE,
        MODEL_NAMES.USER
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    User.findById(req.params.id).catch((err) => {
      res.status(404).send("User not found");
    });

    User.findByIdAndUpdate(req.params.id, { ...req.body })
      .then((result) => {
        res.status(201).send("Note updated successfully");
      })
      .catch((err) => res.status(400).send(err.message));
  },

  disableUserAccount: (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.UPDATE,
        MODEL_NAMES.USER
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    Note.findById(req.params.id).catch((err) => {
      res.status(404).send("Note not found");
    });

    Note.findById(req.params.id)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => res.status(400).send(err.message));
  },
};

module.exports = UserController;

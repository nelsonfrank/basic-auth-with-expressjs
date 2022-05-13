const Note = require("./note.model");
const { ForbiddenError } = require("@casl/ability");
const { createNoteValidation } = require("../../validation/note");
const { PERMISSIONS, MODEL_NAMES } = require("../../config/abilities");
const NoteController = {
  createNote: (req, res) => {
    const { error } = createNoteValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.CREATE,
        MODEL_NAMES.NOTE
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message); // You are not allowed to read private information
      }
      throw error;
    }

    const user = req.user;
    const note = new Note({ ...req.body, authorId: user._id });

    note.save().then(() => {
      res.status(201).send("Note successfully created!");
    });
  },

  getAllNotes: async (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.READ,
        MODEL_NAMES.NOTE
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    Note.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getNoteById: (req, res) => {
    try {
      ForbiddenError.from(req.ability).throwUnlessCan(
        PERMISSIONS.READ,
        MODEL_NAMES.NOTE
      );
    } catch (error) {
      if (error instanceof ForbiddenError) {
        console.log(error.message);
      }
      throw error;
    }

    Note.findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) =>
        res.status(404).send(`Note with id ${req.params.id} not found`)
      );
  },

  updateNote: (req, res) => {
    const { error } = createNoteValidation();
    if (error) return res.status(400).send(error.details[0].message);
  },

  deleteNote: (req, res) => {
    console.log(req.user);
  },
};

module.exports = NoteController;

const router = require("express").Router();
const { Auth } = require("../../middleware/auth");
const { verifyToken } = require("../../middleware/jwt");

const NoteController = require("./note.controller");

router.post("/notes", verifyToken, Auth, NoteController.createNote);

router.get("/notes", verifyToken, Auth, NoteController.getAllNotes);

router.get("/notes/:id", NoteController.getNoteById);

router.patch("/notes/id", NoteController.updateNote);

router.delete("notes/:id", NoteController.deleteNote);

module.exports = router;

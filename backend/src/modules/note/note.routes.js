const router = require("express").Router();
const { Auth } = require("../../middleware/auth");
const { verifyToken } = require("../../middleware/jwt");

const NoteController = require("./note.controller");

router.post("/notes", verifyToken, Auth, NoteController.createNote);

router.get("/notes", verifyToken, Auth, NoteController.getAllNotes);

router.get("/notes/:id", verifyToken, Auth, NoteController.getNoteById);

router.patch("/notes/id", verifyToken, Auth, NoteController.updateNote);

router.delete("notes/:id", verifyToken, Auth, NoteController.deleteNote);

module.exports = router;

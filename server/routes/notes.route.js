import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
} from "../controllers/notes.controller.js";

const router = Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

export { router as notesRouter };

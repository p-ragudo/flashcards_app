import express from "express";
import { createFlashcard, deleteFlashcard } from "../controllers/flashcardController.js";

const router = express.Router();

// api/flashcards
router.post("/:editId", createFlashcard);
router.delete("/:editId/:id", deleteFlashcard);


export default router;
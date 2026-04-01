import express from "express";
import { createSaveFlashcard, deleteFlashcard } from "../controllers/flashcardController.js";
import { createLimiter } from "../middleware/flashcardLimiter.js";

const router = express.Router();

// api/flashcards
router.post("/:editId", createLimiter, createSaveFlashcard);
router.delete("/:editId/:id", deleteFlashcard);


export default router;
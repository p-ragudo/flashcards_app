import express from "express";
import { createFlashcard, deleteFlashcard } from "../controllers/flashcardController.js";
import { createLimiter } from "../middleware/flashcardLimiter.js";

const router = express.Router();

// api/flashcards
router.post("/:editId", createLimiter, createFlashcard);
router.delete("/:editId/:id", deleteFlashcard);


export default router;
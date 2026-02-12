import express from "express";
import { createFlashcard } from "../controllers/flashcardController.js";

const router = express.Router();

// api/flashcards
router.post("/:editId", createFlashcard);

export default router;
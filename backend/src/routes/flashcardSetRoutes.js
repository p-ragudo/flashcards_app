import express from "express";
import { getSetByViewId, getSetByEditId, createSet, deleteSetByEditId } from "../controllers/flashcardSetControllers.js";
import { createLimiter, getLimiter } from "../middleware/flashcardSetLimiter.js";

const router = express.Router();

// api/flashcard-sets
router.post("/", createLimiter, createSet);
router.get("/view/:viewId", getLimiter, getSetByViewId);
router.get("/edit/:editId", getLimiter, getSetByEditId);
router.delete("/:editId", deleteSetByEditId);

export default router;
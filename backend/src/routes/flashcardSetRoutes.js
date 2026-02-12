import express from "express";
import { getSetViewId, getSetEditId, createSet, deleteSetEditId } from "../controllers/flashcardSetControllers.js";

const router = express.Router();

// api/flashcard-sets
router.post("/", createSet);
router.get("/view/:viewId", getSetViewId);
router.get("/edit/:editId", getSetEditId);
router.delete("/:editId", deleteSetEditId);

export default router;
import express from "express";
import { getSetByViewId, getSetByEditId, createSet, deleteSetByEditId } from "../controllers/flashcardSetControllers.js";

const router = express.Router();

// api/flashcard-sets
router.post("/", createSet);
router.get("/view/:viewId", getSetByViewId);
router.get("/edit/:editId", getSetByEditId);
router.delete("/:editId", deleteSetByEditId);

export default router;
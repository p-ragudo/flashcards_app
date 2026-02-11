import express from "express";
import { getSetViewId, getSetEditId, createSet, deleteSetEditId } from "../controllers/setControllers.js";

const router = express.Router();

router.post("/set", createSet);
router.get("/set/view/:viewId", getSetViewId);
router.get("/set/edit/:editId", getSetEditId);
router.delete("/set/:editId", deleteSetEditId);

export default router;
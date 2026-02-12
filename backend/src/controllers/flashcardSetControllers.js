import FlashcardSet from "../models/FlashcardSet.js";
import { nanoid } from "nanoid";

export async function getSetViewId(req, res) {
    try {
        const { viewId } = req.params;
        if(!viewId) {
            return res.status(404).json({message: "viewId is required"});
        }
        
        const flashcardSet = await FlashcardSet.findOne({ viewId });

        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find a flashcard set with id: ${viewId}`});
        }

        res.status(200).json(flashcardSet);
    } catch(error) {
        res.status(404).json({message: `Could not find a flashcard set with id: ${viewId}`});
        console.log("Error in getSetViewId", error);
    }
}

export async function getSetEditId(req, res) {
    try {
        const { editId } = req.params;
        if(!editId) {
            return res.status(404).json({message: "editId is required"});
        }

        const flashcardSet = await FlashcardSet.findOne({ editId });

        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find a flashcard set with id: ${editId}`});
        }

        res.status(200).json(flashcardSet);
    } catch(error) {
        res.status(404).json({message: `Could not find a flashcard set with id: ${editId}`});
        console.log("Error in getSetEditId", error);
    }
}

export async function createSet(req, res) {
    try {
        const { title } = req.body;

        if(!title) {
            return res.status(400).json({message: "Title is required!"});
        }

        const newSet = new FlashcardSet({
            title,
            editId: nanoid(24),
            viewId: nanoid(12)
        });

        await newSet.save();
        res.status(201).json({message: "New set created successfully!"});
    } catch(error) {
        console.log("Error in createSet function", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteSetEditId(req, res) {
    try {
        const { editId } = req.params;
        if(!editId) {
            return res.status(404).json({message: "editId is required"});
        }

        const flashcardSet = await FlashcardSet.findOneAndDelete({ editId });

        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find flashcard set with id: ${editId}`});
        }

        res.status(200).json({message: "Successfully deleted flashcard set"});
    } catch(error) {
        console.error("Could not delete flashcardSet", error);
        res.status(500).json({message: "Error deleting flashard set"});
    }
}
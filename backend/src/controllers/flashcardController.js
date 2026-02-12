import Flashcard from "../models/Flashcard.js";
import FlashcardSet from "../models/FlashcardSet.js";
import { getSetViewId, getSetEditId } from "./flashcardSetControllers.js";

export async function getFlashcardViewId(req, res) {
    try {

    } catch(error) {

    }
}

export async function getFlashcardEditId(req, res) {
    try {

    } catch(error) {

    }
}

export async function createFlashcard(req, res) {
    try {
        const { editId } = req.params;
        const { title, question, answer } = req.body;

        if(!editId) {
            return res.status(404).json({message: "Missing or could not find editId param"});
        }
        if(!title || !question || !answer) {
            return res.status(400).json({bad_request: "Missing fields. Required: 'title, question, answer'"});
        }

        const flashcardSet = await FlashcardSet.findOne({ editId });
        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find flashcardSet with id ${editId}`});
        }

        const flashcard = new Flashcard({
            title,
            setId: flashcardSet._id,
            question: question,
            answer: answer
        });

        await flashcard.save();
        res.status(201).json({message: "Flashcard successfully created!"});
    } catch(error) {
        console.log("Error in createFlashcard()", error);
        res.status(500).json({message: "Internal server error"});
    }
}
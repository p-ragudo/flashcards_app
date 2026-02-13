import Flashcard from "../models/Flashcard.js";
import FlashcardSet from "../models/FlashcardSet.js";

export async function createFlashcard(req, res) {
    try {
        const { editId } = req.params;
        const { question, answer } = req.body;

        if(!editId) {
            return res.status(404).json({message: `Missing, could not find editId param, or could not validate with editId: ${editId}`});
        }
        if(!question || !answer) {
            return res.status(400).json({bad_request: "Missing fields. Required: 'question, answer'"});
        }

        const flashcardSet = await FlashcardSet.findOne({ editId });
        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find flashcardSet with id ${editId}`});
        }

        const flashcard = new Flashcard({
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

export async function deleteFlashcard(req, res) {
    try {
        const { editId, id } = req.params;

        if(!editId || !id) {
            return res.status(400).json({bad_request: "Missing params. Required: editId, id"});
        }
        const flashcardSet = await FlashcardSet.findOne({editId});
        if(!flashcardSet) {
            return res.status(401).json({unathorized: `Could not find flashcard set or validate with editId: ${editId}`});
        }

        const flashcard = await Flashcard.findByIdAndDelete(id);
        if(!flashcard) {
            return res.status(404).json({error: `Could not find flashcard with id: ${id}`});
        }

        res.status(200).json({success: "Successfully deleted flashcard!"});
    } catch(error) {
        console.log("Error in deleteFlashcard()", error);
        res.status(500).json({message: "Internal server error"});
    }
}
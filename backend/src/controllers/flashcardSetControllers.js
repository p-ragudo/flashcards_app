import FlashcardSet from "../models/FlashcardSet.js";
import Flashcard from "../models/Flashcard.js";
import { nanoid } from "nanoid";

export async function getSetByViewId(req, res) {
    try {
        const { viewId } = req.params;
        if(!viewId) {
            return res.status(400).json({message: "Missing params: id"});
        }
        
        const flashcardSet = await FlashcardSet.findOne({ viewId });
        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find a flashcard set with id: ${viewId}`});
        }

        const flashcards = await Flashcard.find({setId: flashcardSet._id});
        if(!flashcards) {
            return res.status(404).json({error: "Could not find flashcards!"});
        }

        res.status(200).json({
            title: flashcardSet.title,
            count: flashcards.length,
            flashcards: flashcards
        });
    } catch(error) {
        res.status(404).json({message: `Could not find a flashcard set with id: ${viewId}`});
        console.log("Error in getSetViewId", error);
    }
}

export async function getSetByEditId(req, res) {
    try {
        const { editId } = req.params;
        if(!editId) {
            return res.status(400).json({message: "Missing params: id"});
        }
        
        const flashcardSet = await FlashcardSet.findOne({ editId });
        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find a flashcard set or validate with id: ${editId}`});
        }

        const flashcards = await Flashcard.find({setId: flashcardSet._id});
        if(!flashcards) {
            return res.status(404).json({error: "Could not find flashcards!"});
        }

        res.status(200).json({
            title: flashcardSet.title,
            count: flashcards.length,
            flashcards: flashcards
        });
    } catch(error) {
        res.status(404).json({message: `Could not find a flashcard set with id: ${editId}`});
        console.log("Error in getSetViewId", error);
    }
}

export async function createSaveSet(req, res) {
    try {
        const { title, desc, editId } = req.body;

        if(!title) {
            return res.status(400).json({message: "Title is required!"});
        }

        await FlashcardSet.findOneAndUpdate(
            {editId: editId},
            {
                title,
                desc,
                editId,
                $setOnInsert: { viewId: nanoid(10) }
            },
            {
                upsert: true,
                returnDocument: 'after',
                runValidators: true
            }
        );

        res.status(200).json({message: "New set created successfully!"});
    } catch(error) {
        console.log("Error in createSet function", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteSetByEditId(req, res) {
    try {
        const { editId } = req.params;
        if(!editId) {
            return res.status(400).json({message: "Missing params: id"});
        }

        const flashcardSet = await FlashcardSet.findOne({ editId });
        if(!flashcardSet) {
            return res.status(404).json({message: `Could not find flashcard set or validate with id: ${editId}`});
        }

        await Flashcard.deleteMany({setId: flashcardSet._id});
        await FlashcardSet.deleteOne({editId});

        res.status(200).json({message: "Successfully deleted flashcard set"});
    } catch(error) {
        console.error("Could not delete flashcardSet", error);
        res.status(500).json({message: "Error deleting flashard set"});
    }
}
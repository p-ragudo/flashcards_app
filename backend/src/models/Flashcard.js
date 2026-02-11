import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
    {
        setId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Set',
            index: true,
            required: true
        },
        cardType: {
            type: String,
            enum: ['basic', 'multiple-choice'],
            default: 'basic'
        },
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        options: [
            {type: String}
        ],
        orderIndex: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ['don\'t know', 'learning', 'know'],
            default: 'don\'t know'
        }
    }
);

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
export default Flashcard;
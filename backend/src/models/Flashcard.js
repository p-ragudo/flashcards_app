import mongoose from "mongoose";

export const basicStr = 'basic';
export const multipleChoiceStr = 'multiple-choice';

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
            enum: [basicStr, multipleChoiceStr],
            default: basicStr
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
            {
                id: {type: String},
                text: {type: String},
                isCorrect: {type: Boolean}
            }
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
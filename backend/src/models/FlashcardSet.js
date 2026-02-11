import mongoose from "mongoose";

const flashcardSetSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        editId: {
            type: String,
            required: true,
            unique: true,
        },
        viewId: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const FlashcardSet = mongoose.model("FlashcardSet", flashcardSetSchema);
export default FlashcardSet;
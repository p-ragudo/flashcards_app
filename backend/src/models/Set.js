import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        editId: {
            type: String,
            unique: true
        },
        viewId: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const Set = mongoose.model("Set", setSchema);
export default Set;
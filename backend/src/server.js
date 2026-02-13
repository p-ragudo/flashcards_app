import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import flashcardSetRoutes from "./routes/flashcardSetRoutes.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 3000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: 'http://localhost:5173',
    }))
}

app.use(express.json());
app.use("/api/flashcard-sets", flashcardSetRoutes);
app.use("/api/flashcards", flashcardRoutes);
app.get("/", (req, res) => {
    res.send("Server running!");
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    });
})

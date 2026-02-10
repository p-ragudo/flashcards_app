import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

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
// use rateLimiter
app.get("/", (req, res) => {
    res.send("Server running!");
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

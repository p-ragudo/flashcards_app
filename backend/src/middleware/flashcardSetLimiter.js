import { flashcardSetCreateLimiter, flashcardSetGetLimiter } from "../config/upstash.js";

export const createLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        const { success, reset } = await flashcardSetCreateLimiter.limit(ip);

        if(!success) {
            const now = Date.now();
            const retryAfter = Math.floor((reset - now) / 1000);

            return res.status(429).json({
                message: `Too many requests! Try again in ${retryAfter} seconds`,
                retryAfter: retryAfter
            });
        }

        next();
    } catch(error) {
        console.log("Error in flashcardSetCreateLimiter", error);
        next(error);
    }
}

export const getLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;

        const { success, reset } = await flashcardSetGetLimiter.limit(ip);

        if(!success) {
            const now = Date.now();
            const retryAfter = Math.floor((reset - now) / 1000);

            return res.status(429).json({
                message: `Too many requests! Try again in ${retryAfter} seconds`,
                retryAfter: retryAfter
            });
        }

        next();
    } catch(error) {
        console.log("Error in flashcardSetGetLimiter", error);
        next(error);
    }
}
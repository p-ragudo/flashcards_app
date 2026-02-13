import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();
const redis = Redis.fromEnv();

export const flashcardSetCreateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 h")
})

export const flashcardSetGetLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, "1 m")
})

export const flashcardCreateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "1 m")
})
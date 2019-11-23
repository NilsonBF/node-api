import { Router } from "express";
import { apiGetTweets } from "./apiGetTweets";

export const tweetsRouter = Router();

tweetsRouter.route("/")
    .get(apiGetTweets)

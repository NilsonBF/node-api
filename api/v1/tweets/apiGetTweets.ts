import { RequestHandler } from "express";

import { Tweets } from '../../../model/tweets';
import { DataStore } from "../../../data/data";

export const apiGetTweets: RequestHandler = (req, res, next) => {
    const account = req.params.id;
    const selectedAccount = DataStore.tweets.find((element: any) => element.id == account);
    if (selectedAccount) {
        res.json(new Tweets(selectedAccount));
    }
    else {
        res.json({ test: "error" });
    }
};
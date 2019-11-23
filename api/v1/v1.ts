import { Router } from "express";

import { tweetsRouter } from "./tweets/apiTweets";

export const routerV1 = Router();

routerV1.get("/", (req, res) => {
  res.send("Japa Tests Node API - GET: /v1/tweets/{account}");
});

routerV1.use("/tweets", tweetsRouter);

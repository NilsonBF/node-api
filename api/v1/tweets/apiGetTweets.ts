import { RequestHandler } from "express";

import { Tweets } from '../../../model/tweets';
import { DataStore } from "../../../data/data";

const cheerio = require("cheerio");
const request = require("request");

export  const apiGetTweets: RequestHandler = (req, res, next) => {
  request(`https://twitter.com/${req.params.id}`, (error: any, response: { statusCode: any; }, body: any) => {
    console.log(`/tweets GET status: ${response && response.statusCode} - error:`, error);
    const $ = cheerio.load(body);
    var teste = $('.js-tweet-text').text();
    res.json({ tweets: teste });
  });

  // const account = req.params.id;
  // const selectedAccount = DataStore.tweets.find((element: any) => element.id == account);
  // if (selectedAccount) {
  //   res.json(new Tweets(selectedAccount));
  // }
  // else {
  //   res.json({ test: "error" });
  // }
};
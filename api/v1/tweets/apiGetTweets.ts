import { RequestHandler } from "express";

const request = require("request");
const cheerio = require("cheerio");

export  const apiGetTweets: RequestHandler = (req, res, next) => {
  request(`https://twitter.com/${req.params.id}`, (error: any, response: { statusCode: any; }, body: any) => {
    console.log(`/tweets GET status: ${response && response.statusCode} - error:`, error);
    const $ = cheerio.load(body);
    var teste = $('.js-tweet-text').text();
    res.json({ tweets: teste });
  });
};
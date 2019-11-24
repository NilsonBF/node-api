"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const cheerio = require("cheerio");
exports.apiGetTweets = (req, res, next) => {
    request(`https://twitter.com/${req.params.id}`, (error, response, body) => {
        console.log(`/tweets GET status: ${response && response.statusCode} - error:`, error);
        const $ = cheerio.load(body);
        var teste = $('.js-tweet-text').text();
        res.json({ tweets: teste });
    });
};

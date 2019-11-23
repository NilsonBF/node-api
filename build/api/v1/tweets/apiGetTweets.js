"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var request = require("request");
exports.apiGetTweets = function (req, res, next) {
    request("https://twitter.com/" + req.params.id, function (error, response, body) {
        console.log("/tweets GET status: " + (response && response.statusCode) + " - error:", error);
        var $ = cheerio.load(body);
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tweets_1 = require("../../../model/tweets");
var data_1 = require("../../../data/data");
exports.apiGetTweets = function (req, res, next) {
    var account = req.params.id;
    var selectedAccount = data_1.DataStore.tweets.find(function (element) { return element.id == account; });
    if (selectedAccount) {
        res.json(new tweets_1.Tweets(selectedAccount));
    }
    else {
        res.json({ test: "error" });
    }
};

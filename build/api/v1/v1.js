"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiTweets_1 = require("./tweets/apiTweets");
exports.routerV1 = express_1.Router();
exports.routerV1.get("/", function (req, res) {
    res.send("Japa Tests Node API");
});
exports.routerV1.use("/tweets", apiTweets_1.tweetsRouter);

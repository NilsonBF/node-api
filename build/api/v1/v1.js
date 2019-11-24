"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiTweets_1 = require("./tweets/apiTweets");
var apiDbTests_1 = require("./dbTests/apiDbTests");
exports.routerV1 = express_1.Router();
exports.routerV1.get("/", function (req, res) {
    res.send("Japa Tests Node API - GET: /v1/tweets/{account}");
});
exports.routerV1.use("/tweets", apiTweets_1.tweetsRouter);
exports.routerV1.use("/dbtests", apiDbTests_1.dbTestsRouter);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiGetTweets_1 = require("./apiGetTweets");
exports.tweetsRouter = express_1.Router();
exports.tweetsRouter.route("/")
    .get(apiGetTweets_1.apiGetTweets);

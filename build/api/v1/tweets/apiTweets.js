"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetTweets_1 = require("./apiGetTweets");
exports.tweetsRouter = express_1.Router();
exports.tweetsRouter.route("/:id")
    .get(apiGetTweets_1.apiGetTweets);

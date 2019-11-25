"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const cheerio = require("cheerio");
exports.apiPostCheerio = (req, res, next) => {
    const query = {
        url: req.body.url,
        class: `.${req.body.class}`
    };
    request(query.url, (error, response, body) => {
        console.log(`/cheerio POST status: ${response && response.statusCode} - error:`, error);
        const $ = cheerio.load(body);
        var result = $(query.class).text();
        res.json({ result: result });
    });
};

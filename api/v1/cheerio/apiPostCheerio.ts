import { RequestHandler } from "express";

const request = require("request");
const cheerio = require("cheerio");

export  const apiPostCheerio: RequestHandler = (req, res, next) => {
  const query = {
    url: req.body.url,
    class: `.${req.body.class}`
  }
  request(query.url, (error: any, response: { statusCode: any; }, body: any) => {
    console.log(`/cheerio POST status: ${response && response.statusCode} - error:`, error);
    const $ = cheerio.load(body);
    var result = $(query.class).text();
    res.json({ result: result });
  });
};

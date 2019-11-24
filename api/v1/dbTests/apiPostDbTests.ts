import { RequestHandler } from "express";
import { DbTest } from "../../../db/dbTests";

export  const apiPostDbTests: RequestHandler = (req, res, next) => {
  const newTest = {
    number: req.body.number,
    text: req.body.text
  }
  new DbTest(newTest).save((err, newTest) => {
    console.log(`/tests POST status: ${res && res.statusCode} - error:`, err);
    res.json({ result: "success", saved: newTest });
  });
};

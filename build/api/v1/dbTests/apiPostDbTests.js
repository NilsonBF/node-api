"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbTests_1 = require("../../../db/dbTests");
exports.apiPostDbTests = (req, res, next) => {
    const newTest = {
        number: req.body.number,
        text: req.body.text
    };
    new dbTests_1.DbTest(newTest).save((err, newTest) => {
        console.log(`/tests POST status: ${res && res.statusCode} - error:`, err);
        res.json({ result: "success", saved: newTest });
    });
};

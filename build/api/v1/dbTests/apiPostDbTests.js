"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbTests_1 = require("../../../db/dbTests");
exports.apiPostDbTests = function (req, res, next) {
    var newTest = {
        number: req.body.number,
        text: req.body.text
    };
    new dbTests_1.DbTest(newTest).save(function (err, newTest) {
        console.log("/tests POST status: " + (res && res.statusCode) + " - error:", err);
        res.json({ result: "success", saved: newTest });
    });
};

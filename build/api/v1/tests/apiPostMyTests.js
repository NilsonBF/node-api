"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myTests_1 = require("../../../db/myTests");
exports.apiPostMyTests = function (req, res, next) {
    var newTest = {
        number: req.body.number,
        text: req.body.text
    };
    new myTests_1.MyTest(newTest).save(function (err, newTest) {
        console.log("/tests POST status: " + (res && res.statusCode) + " - error:", err);
        res.json({ result: "success", saved: newTest });
    });
};

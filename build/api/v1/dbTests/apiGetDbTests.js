"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbTests_1 = require("../../../db/dbTests");
var myTest_1 = require("../../../model/myTest");
exports.apiGetDbTests = function (req, res, next) {
    dbTests_1.DbTest.find().then(function (data) {
        console.log("/dbtests GET status: " + (res && res.statusCode) + " - error:", null);
        res.json(data.map(function (item) { return new myTest_1.MyTest(item); }));
    }, function (err) {
        console.log("/dbtests GET status: " + (res && res.statusCode) + " - error:", err);
    });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbTests_1 = require("../../../db/dbTests");
const myTest_1 = require("../../../model/myTest");
exports.apiGetDbTests = (req, res, next) => {
    dbTests_1.DbTest.find().then((data) => {
        console.log(`/dbtests GET status: ${res && res.statusCode} - error:`, null);
        res.json(data.map((item) => new myTest_1.MyTest(item)));
    }, (err) => {
        console.log(`/dbtests GET status: ${res && res.statusCode} - error:`, err);
    });
};

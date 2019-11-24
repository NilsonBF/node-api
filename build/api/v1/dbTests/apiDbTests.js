"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bodyParser_1 = require("../general/bodyParser");
var apiGetDbTests_1 = require("./apiGetDbTests");
var apiPostDbTests_1 = require("./apiPostDbTests");
exports.dbTestsRouter = express_1.Router();
exports.dbTestsRouter.route("/")
    .get(apiGetDbTests_1.apiGetDbTests)
    .post(bodyParser_1.jsonParser, apiPostDbTests_1.apiPostDbTests);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiPostMyTests_1 = require("./apiPostMyTests");
var bodyParser_1 = require("../general/bodyParser");
exports.testsRouter = express_1.Router();
exports.testsRouter.route("/")
    .post(bodyParser_1.jsonParser, apiPostMyTests_1.apiPostMyTests);

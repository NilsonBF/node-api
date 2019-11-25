"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParser_1 = require("../general/bodyParser");
const apiPostCheerio_1 = require("./apiPostCheerio");
exports.cheerioRouter = express_1.Router();
exports.cheerioRouter.route("/")
    .post(bodyParser_1.jsonParser, apiPostCheerio_1.apiPostCheerio);

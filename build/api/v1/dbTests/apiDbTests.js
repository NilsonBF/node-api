"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParser_1 = require("../general/bodyParser");
const apiGetDbTests_1 = require("./apiGetDbTests");
const apiPostDbTests_1 = require("./apiPostDbTests");
exports.dbTestsRouter = express_1.Router();
exports.dbTestsRouter.route("/")
    .get(apiGetDbTests_1.apiGetDbTests)
    .post(bodyParser_1.jsonParser, apiPostDbTests_1.apiPostDbTests);

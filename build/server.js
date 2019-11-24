"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = require("./api/v1/v1");
const db_1 = require("./db/db");
const app = express_1.default();
db_1.connectMongo();
app.disable("x-powered-by");
app.use("/v1", v1_1.routerV1);
app.listen(process.env.PORT || 8091, () => console.log(`Japa Server - port: ${process.env.PORT || 8091} `));

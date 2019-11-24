"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constants_1 = require("../constants");
function connectMongo() {
    mongoose_1.default.connect(constants_1.Constants.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
}
exports.connectMongo = connectMongo;

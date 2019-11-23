"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tweets_json_1 = __importDefault(require("./tweets.json"));
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.tweets = tweets_json_1.default;
    return DataStore;
}());
exports.DataStore = DataStore;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = function (err, req, res, next) {
    return res.status(err.status).json(err);
};

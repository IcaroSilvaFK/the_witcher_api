"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const App_error_1 = require("../errors/App.error");
function ErrorMiddleware(error, request, response, next) {
    if (error instanceof App_error_1.AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
            timestamp: error.timestamp,
        });
    }
}
exports.ErrorMiddleware = ErrorMiddleware;

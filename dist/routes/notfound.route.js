"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundRoute = void 0;
function NotFoundRoute(request, response) {
    response.status(404).json({
        message: "Route not found!",
    });
}
exports.NotFoundRoute = NotFoundRoute;

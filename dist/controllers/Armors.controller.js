"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorsController = void 0;
const client_1 = require("@prisma/client");
class ArmorsController {
    armorService;
    constructor(armorService) {
        this.armorService = armorService;
    }
    async getALl(request, response) {
        const { page } = request.query;
        try {
            const data = await this.armorService.getAll(+page);
            return response.status(200).json(data);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                return response.status(500).json({
                    message: error.message,
                    timestamp: new Date().toISOString(),
                });
            }
            return response.status(500).json({
                message: "Internal server error",
                timestamp: new Date().toISOString(),
            });
        }
    }
    async getOneArmor(request, response) {
        const { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "ID param is required",
            });
        }
        try {
            const data = await this.armorService.getOneArmor(id);
            return response.status(200).json(data);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                return response.status(500).json({
                    message: error.message,
                    timestamp: new Date().toISOString(),
                });
            }
            return response.status(500).json({
                message: "Internal server error",
                timestamp: new Date().toISOString(),
            });
        }
    }
}
exports.ArmorsController = ArmorsController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorService = void 0;
const runtime_1 = require("@prisma/client/runtime");
const App_error_1 = require("../errors/App.error");
class ArmorService {
    armorService;
    constructor(armorService) {
        this.armorService = armorService;
    }
    async getAll(page = 1) {
        try {
            const armors = await this.armorService.getAll(page);
            if (!armors.has_next_page) {
            }
            return armors;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                throw new App_error_1.AppError(error.message, 500);
            }
        }
    }
    async getOneArmor(id) {
        const response = await this.armorService.getOneArmor(id);
        return response;
    }
}
exports.ArmorService = ArmorService;

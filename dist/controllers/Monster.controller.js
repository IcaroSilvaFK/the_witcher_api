"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonstersController = void 0;
class MonstersController {
    monstersService;
    constructor(monstersService) {
        this.monstersService = monstersService;
    }
    async getALl(request, response) {
        const { page } = request.query;
        try {
            const monster = await this.monstersService.getAll(+page);
            return response.status(200).json(monster);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
    async getOneMonster(request, response) {
        const { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "ID is missing a type",
            });
        }
        try {
            const monster = await this.monstersService.getOneMonster(id);
            return response.status(200).json(monster);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
}
exports.MonstersController = MonstersController;

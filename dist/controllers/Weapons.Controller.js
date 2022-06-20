"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponsController = void 0;
class WeaponsController {
    weaponsService;
    constructor(weaponsService) {
        this.weaponsService = weaponsService;
    }
    async getALl(request, response) {
        const { page } = request.query;
        try {
            const weapons = await this.weaponsService.getAll(+page);
            return response.status(200).json(weapons);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
    async getOneWeapon(request, response) {
        const { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "ID is missing a type",
            });
        }
        try {
            const weapon = await this.weaponsService.getOneWeapon(id);
            return response.status(200).json(weapon);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
}
exports.WeaponsController = WeaponsController;

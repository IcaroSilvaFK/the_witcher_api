"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponsService = void 0;
class WeaponsService {
    weaponsRepository;
    constructor(weaponsRepository) {
        this.weaponsRepository = weaponsRepository;
    }
    async getAll(page = 1) {
        const weapons = await this.weaponsRepository.getAll(page);
        return weapons;
    }
    async getOneWeapon(id) {
        const weapon = await this.weaponsRepository.getOneWeapon(id);
        return weapon;
    }
}
exports.WeaponsService = WeaponsService;

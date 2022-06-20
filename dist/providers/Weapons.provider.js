"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponsProvider = void 0;
const Weapons_Controller_1 = require("../controllers/Weapons.Controller");
const Weapons_repository_1 = require("../repositories/Weapons.repository");
const Weapons_service_1 = require("../services/Weapons.service");
function weaponsProvider() {
    const weaponsRepository = new Weapons_repository_1.WeaponsRepository();
    const weaponsService = new Weapons_service_1.WeaponsService(weaponsRepository);
    const weaponsController = new Weapons_Controller_1.WeaponsController(weaponsService);
    return weaponsController;
}
exports.weaponsProvider = weaponsProvider;

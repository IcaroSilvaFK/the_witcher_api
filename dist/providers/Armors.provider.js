"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armorsProvider = void 0;
const Armors_controller_1 = require("../controllers/Armors.controller");
const Armors_repository_1 = require("../repositories/Armors.repository");
const Armor_service_1 = require("../services/Armor.service");
function armorsProvider() {
    const armorsRepository = new Armors_repository_1.ArmorsRepository();
    const armorService = new Armor_service_1.ArmorService(armorsRepository);
    const armorsController = new Armors_controller_1.ArmorsController(armorService);
    return armorsController;
}
exports.armorsProvider = armorsProvider;

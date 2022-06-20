"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monstersProvider = void 0;
const Monster_controller_1 = require("../controllers/Monster.controller");
const Monsters_repository_1 = require("../repositories/Monsters.repository");
const Monsters_service_1 = require("../services/Monsters.service");
function monstersProvider() {
    const mosnterRespository = new Monsters_repository_1.MonstersRepository();
    const monsterService = new Monsters_service_1.MonstersService(mosnterRespository);
    const monstersController = new Monster_controller_1.MonstersController(monsterService);
    return monstersController;
}
exports.monstersProvider = monstersProvider;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charactersProvider = void 0;
const Characters_controller_1 = require("../controllers/Characters.controller");
const Characters_repository_1 = require("../repositories/Characters.repository");
const Characters_service_1 = require("../services/Characters.service");
function charactersProvider() {
    const charactersRepository = new Characters_repository_1.CharactersRepository();
    const characterService = new Characters_service_1.CharacterService(charactersRepository);
    const charactersController = new Characters_controller_1.CharactersController(characterService);
    return charactersController;
}
exports.charactersProvider = charactersProvider;

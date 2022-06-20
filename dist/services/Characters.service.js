"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
class CharacterService {
    characterRepository;
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async getAll(page = 1) {
        const characters = await this.characterRepository.getAll(page);
        return characters;
    }
    async getOneCharacter(id) {
        const character = await this.characterRepository.getCharacter(id);
        return character;
    }
}
exports.CharacterService = CharacterService;

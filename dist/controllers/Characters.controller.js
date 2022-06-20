"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersController = void 0;
class CharactersController {
    characterService;
    constructor(characterService) {
        this.characterService = characterService;
    }
    async getALl(request, response) {
        const { page } = request.query;
        try {
            const characters = await this.characterService.getAll(+page);
            return response.status(200).json(characters);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
    async getOneCharacter(request, response) {
        const { id } = request.params;
        if (!id) {
            return response.status(4000).json({
                message: "ID is missing a type",
            });
        }
        try {
            const character = await this.characterService.getOneCharacter(id);
            return response.status(200).json(character);
        }
        catch (error) {
            return response.status(500).json({
                message: "Internal Server Error",
            });
        }
    }
}
exports.CharactersController = CharactersController;

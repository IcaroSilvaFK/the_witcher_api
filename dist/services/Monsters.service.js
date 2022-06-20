"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonstersService = void 0;
class MonstersService {
    monstersReposioty;
    constructor(monstersReposioty) {
        this.monstersReposioty = monstersReposioty;
    }
    async getAll(page = 1) {
        const monsters = await this.monstersReposioty.getAll(page);
        return monsters;
    }
    async getOneMonster(id) {
        const monster = await this.monstersReposioty.getMonster(id);
        return monster;
    }
}
exports.MonstersService = MonstersService;

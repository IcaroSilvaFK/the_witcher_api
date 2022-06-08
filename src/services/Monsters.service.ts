import { MonstersRepository } from "../repositories/Monsters.repository";

export class MonstersService {
  constructor(private readonly monstersReposioty: MonstersRepository) {}

  async getAll(page = 1) {
    const monsters = await this.monstersReposioty.getAll(page);
    return monsters;
  }
  async getOneMonster(id: string) {
    const monster = await this.monstersReposioty.getMonster(id);

    return monster;
  }
}

import { MonstersRepository } from "../repository/Monsters.repository";

export class MonstersService {
  constructor(private readonly monstersReposioty: MonstersRepository) {}

  async getAll() {
    const monsters = await this.monstersReposioty.getAll();
    console.log(monsters);
    return monsters;
  }
  async getOneMonster(id: string) {
    const monster = await this.monstersReposioty.getMonster(id);

    return monster;
  }
}

import { CharactersRepository } from "../repositories/Characters.repository";

export class CharacterService {
  constructor(private readonly characterRepository: CharactersRepository) {}

  async getAll(page = 1) {
    const characters = await this.characterRepository.getAll(page);
    return characters;
  }

  async getOneCharacter(id: string) {
    const character = await this.characterRepository.getCharacter(id);

    return character;
  }
}

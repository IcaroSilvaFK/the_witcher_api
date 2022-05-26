import { CharactersRepository } from "../repository/Characters.repository";

export class CharacterService {
  constructor(private readonly characterRepository: CharactersRepository) {}

  async getAll() {
    const characters = await this.characterRepository.getAll();

    return characters;
  }

  async getOneCharacter(id: string) {
    const character = await this.characterRepository.getCharacter(id);

    return character;
  }
}

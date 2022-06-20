import { CharactersController } from "../controllers/Characters.controller";
import { CharactersRepository } from "../repositories/Characters.repository";
import { CharacterService } from "../services/Characters.service";

function charactersProvider() {
  const charactersRepository = new CharactersRepository();
  const characterService = new CharacterService(charactersRepository);
  const charactersController = new CharactersController(characterService);

  return charactersController;
}

export { charactersProvider };

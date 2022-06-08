import { Request, Response } from "express";
import { CharacterService } from "../services/Characters.service";
import { CharactersRepository } from "../repositories/Characters.repository";

export class CharactersController {
  async getALl(request: Request, response: Response) {
    const { page } = request.query;
    const charactersRepository = new CharactersRepository();
    const charactersService = new CharacterService(charactersRepository);

    try {
      const characters = await charactersService.getAll(+page!);

      return response.status(200).json(characters);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async getOneCharacter(request: Request, response: Response) {
    const { id } = request.params;
    const charactersRepository = new CharactersRepository();
    const charactersService = new CharacterService(charactersRepository);

    if (!id) {
      return response.status(4000).json({
        message: "ID is missing a type",
      });
    }
    try {
      const character = await charactersService.getOneCharacter(id);

      return response.status(200).json(character);
    } catch (error) {
      return response.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

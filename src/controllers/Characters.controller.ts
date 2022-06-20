import { Request, Response } from "express";
import { CharacterService } from "../services/Characters.service";

export class CharactersController {
  constructor(private readonly characterService: CharacterService) {}

  async getALl(request: Request, response: Response) {
    const { page } = request.query;

    try {
      const characters = await this.characterService.getAll(+page!);

      return response.status(200).json(characters);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async getOneCharacter(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(4000).json({
        message: "ID is missing a type",
      });
    }
    try {
      const character = await this.characterService.getOneCharacter(id);

      return response.status(200).json(character);
    } catch (error) {
      return response.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

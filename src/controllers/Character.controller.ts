import { Request, Response } from "express";
import { CharacterRepository } from "../repository/Character.repository";
import { CharacterService } from "../services/Character.service";

export class CharacterController {
  async getALl(request: Request, response: Response) {
    const characterRepository = new CharacterRepository();
    const characterService = new CharacterService(characterRepository);

    try {
      const characters = await characterService.getAll();

      return response.status(200).json(characters);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async getOneCharacter(request: Request, response: Response) {
    const { id } = request.params;
    const characterRepository = new CharacterRepository();
    const characterService = new CharacterService(characterRepository);

    if (!id) {
      return response.status(4000).json({
        message: "ID is missing a type",
      });
    }
    try {
      const character = await characterService.getOneCharacter(id);

      return response.status(200).json(character);
    } catch (error) {
      return response.status(200).json({
        message: "Internal Server Error",
      });
    }
  }
}

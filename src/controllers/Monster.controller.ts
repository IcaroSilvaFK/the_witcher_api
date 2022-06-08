import { Request, Response } from "express";
import { MonstersRepository } from "../repositories/Monsters.repository";
import { MonstersService } from "../services/Monsters.service";

export class MonstersController {
  async getALl(request: Request, response: Response) {
    const { page } = request.query;
    const monstersRepository = new MonstersRepository();
    const monstersService = new MonstersService(monstersRepository);

    try {
      const monster = await monstersService.getAll(+page!);

      return response.status(200).json(monster);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async getOneMonster(request: Request, response: Response) {
    const { id } = request.params;
    const monstersRepository = new MonstersRepository();
    const monstersService = new MonstersService(monstersRepository);

    if (!id) {
      return response.status(400).json({
        message: "ID is missing a type",
      });
    }

    try {
      const monster = await monstersService.getOneMonster(id);

      return response.status(200).json(monster);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

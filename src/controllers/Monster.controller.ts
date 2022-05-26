import { Request, Response } from "express";
import { MonstersRepository } from "../repository/Monster.repository";
import { MonstersService } from "../services/Monster.service";

export class MonstersController {
  async getALl(request: Request, response: Response) {
    const monstersReposioty = new MonstersRepository();
    const monstersService = new MonstersService(monstersReposioty);

    try {
      const monster = await monstersService.getAll();

      return response.status(200).json(monster);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async getOneMonster(request: Request, response: Response) {
    const { id } = request.params;
    const monstersReposioty = new MonstersRepository();
    const monstersService = new MonstersService(monstersReposioty);

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

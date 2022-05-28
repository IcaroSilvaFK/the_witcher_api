import { Request, Response } from "express";
import { MonstersRepository } from "../repository/Monsters.repository";
import { MonstersService } from "../services/Monsters.service";

export class MonstersController {
  static async getALl(request: Request, response: Response) {
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

  static async getOneMonster(request: Request, response: Response) {
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

  static async getPerPage(request: Request, response: Response) {
    const { page } = request.query;
    const monstersReposioty = new MonstersRepository();
    const monstersService = new MonstersService(monstersReposioty);

    if (!page) {
      return response.status(400).json({
        message: "Incorrect params",
      });
    }

    try {
      const monsters = await monstersService.getPerPage(`${page}`);

      return response.status(200).json(monsters);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

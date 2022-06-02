import { Request, Response } from "express";
import { json } from "stream/consumers";
import { AppError } from "../errors/App.error";
import { ArmorsRepository } from "../repositories/Armors.repository";
import { ArmorService } from "../services/Armor.service";

export class ArmorsController {
  static async getALl(request: Request, response: Response) {
    const armorRepository = new ArmorsRepository();
    const armorService = new ArmorService(armorRepository);

    const data = await armorService.getAll();
    return response.status(200).json(data);
  }
  static async getOneArmor(request: Request, response: Response) {
    const { id } = request.params;
    const armorRepository = new ArmorsRepository();
    const armorService = new ArmorService(armorRepository);

    if (!id) {
      return response.status(404).json({
        message: "ID param is required",
      });
    }
    try {
      const data = await armorService.getOneArmor(id);

      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  static async getPerPage(request: Request, response: Response) {
    const { page } = request.query;
    const armorRepository = new ArmorsRepository();
    const armorService = new ArmorService(armorRepository);

    if (!page) {
      throw new AppError("Page is requerid in query", 400);
    }

    const data = await armorService.getPerPage(`${page}`);

    return response.status(200).json(data);
  }
}

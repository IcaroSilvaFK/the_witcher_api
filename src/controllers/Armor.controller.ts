import { Request, Response } from "express";
import { ArmorRepository } from "../repository/Armor.repository";
import { ArmorService } from "../services/Armor.service";

export class ArmorController {
  async getALl(request: Request, response: Response) {
    const armorRepository = new ArmorRepository();
    const armorService = new ArmorService(armorRepository);

    try {
      const data = await armorService.getAll();

      return response.status(200).json(data);
    } catch (error) {
      response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

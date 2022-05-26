import { Request, Response } from "express";
import { ArmorsRepository } from "../repository/Armors.repository";
import { ArmorService } from "../services/Armor.service";

export class ArmorsController {
  async getALl(request: Request, response: Response) {
    const armorRepository = new ArmorsRepository();
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
  async getOneArmor(request: Request, response: Response) {
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
}

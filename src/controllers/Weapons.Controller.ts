import { Request, Response } from "express";
import { WeaponsRepository } from "../repository/Wepons.repository";
import { WeaponsService } from "../services/Weapons.service";

export class WeaponsController {
  async getALl(request: Request, response: Response) {
    const weaponsRepository = new WeaponsRepository();
    const weaponsService = new WeaponsService(weaponsRepository);

    try {
      const weapons = weaponsService.getAll();

      return response.status(200).json(weapons);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
  async getOneWeapon(request: Request, response: Response) {
    const { id } = request.params;
    const weaponsRepository = new WeaponsRepository();
    const weaponsService = new WeaponsService(weaponsRepository);

    if (!id) {
      return response.status(400).json({
        message: "ID is missing a type",
      });
    }
    try {
      const weapon = await weaponsService.getOneWeapon(id);

      return response.status(200).json(weapon);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

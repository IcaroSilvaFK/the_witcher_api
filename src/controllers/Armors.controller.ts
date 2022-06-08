import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

import { ArmorsRepository } from "../repositories/Armors.repository";
import { ArmorService } from "../services/Armor.service";

export class ArmorsController {
  async getALl(request: Request, response: Response) {
    const { page } = request.query;
    const armorRepository = new ArmorsRepository();
    const armorService = new ArmorService(armorRepository);

    try {
      const data = await armorService.getAll(+page!);
      return response.status(200).json(data);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(500).json({
          message: error.message,
          timestamp: new Date().toISOString(),
        });
      }
      return response.status(500).json({
        message: "Internal server error",
        timestamp: new Date().toISOString(),
      });
    }
  }
  async getOneArmor(request: Request, response: Response) {
    const { id } = request.params;
    const armorRepository = new ArmorsRepository();
    const armorService = new ArmorService(armorRepository);

    if (!id) {
      return response.status(400).json({
        message: "ID param is required",
      });
    }
    try {
      const data = await armorService.getOneArmor(id);

      return response.status(200).json(data);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(500).json({
          message: error.message,
          timestamp: new Date().toISOString(),
        });
      }
      return response.status(500).json({
        message: "Internal server error",
        timestamp: new Date().toISOString(),
      });
    }
  }
}
//Bounty_hunter_gambeson_dgy5ql"

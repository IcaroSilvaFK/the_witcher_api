import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

import { ArmorService } from "../services/Armor.service";

export class ArmorsController {
  constructor(private readonly armorService: ArmorService) {}

  async getALl(request: Request, response: Response) {
    const { page } = request.query;

    try {
      const data = await this.armorService.getAll(+page!);
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

    if (!id) {
      return response.status(400).json({
        message: "ID param is required",
      });
    }
    try {
      const data = await this.armorService.getOneArmor(id);

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

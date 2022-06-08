import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../errors/App.error";
import { ArmorsRepository } from "../repositories/Armors.repository";

export class ArmorService {
  constructor(private readonly armorService: ArmorsRepository) {}

  async getAll(page = 1) {
    try {
      const armors = await this.armorService.getAll(page);

      if (!armors.has_next_page) {
      }

      return armors;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new AppError(error.message, 500);
      }
    }
  }
  async getOneArmor(id: string) {
    const response = await this.armorService.getOneArmor(id);

    return response;
  }
}

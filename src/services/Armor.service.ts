import { ArmorsRepository } from "../repository/Armors.repository";

export class ArmorService {
  constructor(private readonly armorService: ArmorsRepository) {}

  async getAll() {
    const armors = await this.armorService.getAll();

    return armors;
  }
  async getOneArmor(id: string) {
    const response = await this.armorService.getOneArmor(id);

    return response;
  }
}

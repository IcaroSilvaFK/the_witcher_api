import { ArmorRepository } from "../repository/Armor.repository";

export class ArmorService {
  constructor(private readonly armorService: ArmorRepository) {}

  async getAll() {
    const armors = await this.armorService.getAll();

    return armors;
  }
}

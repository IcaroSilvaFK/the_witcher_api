import { WeaponsRepository } from "../repository/Wepons.repository";

export class WeaponsService {
  constructor(private readonly weaponsRepository: WeaponsRepository) {}

  async getAll() {
    const weapons = await this.weaponsRepository.getAll();

    return weapons;
  }
  async getOneWeapon(id: string) {
    const weapon = await this.weaponsRepository.getOneWeapon(id);

    return weapon;
  }
}

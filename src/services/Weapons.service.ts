import { WeaponsRepository } from "../repositories/Weapons.repository";

export class WeaponsService {
  constructor(private readonly weaponsRepository: WeaponsRepository) {}

  async getAll(page = 1) {
    const weapons = await this.weaponsRepository.getAll(page);
    return weapons;
  }
  async getOneWeapon(id: string) {
    const weapon = await this.weaponsRepository.getOneWeapon(id);

    return weapon;
  }
}

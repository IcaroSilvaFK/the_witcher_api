import { WeaponsRepository } from "../repositories/Weapons.repository";

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

  async getPerPage(page: string) {
    const weapons = await this.weaponsRepository.getPagination(+page);

    return weapons;
  }
}

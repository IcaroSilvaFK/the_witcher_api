import { WeaponsController } from "../controllers/Weapons.Controller";
import { WeaponsRepository } from "../repositories/Weapons.repository";
import { WeaponsService } from "../services/Weapons.service";

function weaponsProvider() {
  const weaponsRepository = new WeaponsRepository();
  const weaponsService = new WeaponsService(weaponsRepository);
  const weaponsController = new WeaponsController(weaponsService);
  return weaponsController;
}

export { weaponsProvider };

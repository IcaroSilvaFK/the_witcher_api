import { ArmorsController } from "../controllers/Armors.controller";
import { ArmorsRepository } from "../repositories/Armors.repository";
import { ArmorService } from "../services/Armor.service";

function armorsProvider() {
  const armorsRepository = new ArmorsRepository();
  const armorService = new ArmorService(armorsRepository);
  const armorsController = new ArmorsController(armorService);

  return armorsController;
}

export { armorsProvider };

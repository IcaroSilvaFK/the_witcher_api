import { MonstersController } from "../controllers/Monster.controller";
import { MonstersRepository } from "../repositories/Monsters.repository";
import { MonstersService } from "../services/Monsters.service";

function monstersProvider() {
  const mosnterRespository = new MonstersRepository();
  const monsterService = new MonstersService(mosnterRespository);
  const monstersController = new MonstersController(monsterService);

  return monstersController;
}

export { monstersProvider };

import { Router } from "express";
import { ArmorsController } from "../controllers/Armors.controller";
import { CharactersController } from "../controllers/Characters.controller";
import { MonstersController } from "../controllers/Monster.controller";
import { WeaponsController } from "../controllers/Weapons.Controller";

const router = Router();

const armorController = new ArmorsController();
const characterController = new CharactersController();
const monstersController = new MonstersController();
const weaponsController = new WeaponsController();

router.get("/", (request, response) => {
  response.status(200).json({
    name: "Whyy",
  });
});

// armors
router.get("/armors", armorController.getALl);
router.get("/armors/:id", armorController.getOneArmor);

// characters
router.get("/characters", characterController.getALl);
router.get("/character/:id", characterController.getOneCharacter);

// monsters
router.get("/monsters", monstersController.getALl);
router.get("/monsters/:id", monstersController.getOneMonster);

//weapons
router.get("/weapons", weaponsController.getALl);
router.get("/weapons/:id", weaponsController.getOneWeapon);

export { router };

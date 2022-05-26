import { Router } from "express";
import { ArmorController } from "../controllers/Armor.controller";
import { CharacterController } from "../controllers/Character.controller";
import { MonstersController } from "../controllers/Monster.controller";
import { WeaponsController } from "../controllers/Weapons.Controller";

const router = Router();

const armorController = new ArmorController();
const characterController = new CharacterController();
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
router.get("/character", characterController.getALl);
router.get("/character/:id", characterController.getOneCharacter);

// monsters
router.get("/character", monstersController.getALl);
router.get("/character/:id", monstersController.getOneMonster);

//weapons
router.get("/character", weaponsController.getALl);
router.get("/character/:id", weaponsController.getOneWeapon);

export { router };

import { Router } from "express";
import { ArmorsController } from "../controllers/Armors.controller";
import { CharactersController } from "../controllers/Characters.controller";
import { MonstersController } from "../controllers/Monster.controller";
import { WeaponsController } from "../controllers/Weapons.Controller";

const router = Router();

router.get("/", (request, response) => {
  response.status(200).json({
    name: "Whyy",
  });
});

// armors
router.get("/armors", ArmorsController.getALl);
router.get("/armors/:id", ArmorsController.getOneArmor);
//router.get("/armors/:page");

// characters
router.get("/characters", CharactersController.getALl);
router.get("/characters/:id", CharactersController.getOneCharacter);
// router.get("/characters/:page")

// monsters
router.get("/monsters", MonstersController.getALl);
router.get("/monsters/:id", MonstersController.getOneMonster);
//router.get("/monsters/:page")

//weapons
router.get("/weapons", WeaponsController.getALl);
router.get("/weapons/:id", WeaponsController.getOneWeapon);
// router.get("/monsters/:page")

export { router };

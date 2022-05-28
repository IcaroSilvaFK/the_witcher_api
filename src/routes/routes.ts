import { Router } from "express";

import { ArmorsController } from "../controllers/Armors.controller";
import { CharactersController } from "../controllers/Characters.controller";
import { MonstersController } from "../controllers/Monster.controller";
import { WeaponsController } from "../controllers/Weapons.Controller";

const router = Router();

router.get("/", (_, response) => {
  response.status(200).json({
    nick_name: "Whyy",
    author: "Icaro Vieira",
  });
});

// armors
router.get("/armors", ArmorsController.getALl);
router.get("/armors/:id", ArmorsController.getOneArmor);
router.get("/armorsPage", ArmorsController.getPerPage);

// characters
router.get("/characters", CharactersController.getALl);
router.get("/characters/:id", CharactersController.getOneCharacter);
router.get("/charactersPage", CharactersController.getPerPage);

// monsters
router.get("/monsters", MonstersController.getALl);
router.get("/monsters/:id", MonstersController.getOneMonster);
router.get("/charactersPage", MonstersController.getPerPage);

//weapons
router.get("/weapons", WeaponsController.getALl);
router.get("/weapons/:id", WeaponsController.getOneWeapon);
router.get("/charactersPage", WeaponsController.getPerPage);

export { router };

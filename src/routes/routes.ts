import { Router } from "express";

import { armorsProvider } from "../providers/Armors.provider";
import { charactersProvider } from "../providers/Characters.provider";
import { monstersProvider } from "../providers/Monsters.provider";
import { weaponsProvider } from "../providers/Weapons.provider";

const router = Router();

router.get("/", (_, response) => {
  response.status(200).json({
    nickname: "Whyy",
    author: "Icaro Vieira",
    api_name: "The witcher`s",
    get: ["/armors", "/characters", "/monsters", "/weapons"],
    prams: ["?page=number"],
  });
});

// armors
router.get("/armors", armorsProvider.getALl);
router.get("/armors/:id", armorsProvider.getOneArmor);

// characters
router.get("/characters", charactersProvider.getALl);
router.get("/characters/:id", charactersProvider.getOneCharacter);

// monsters
router.get("/monsters", monstersProvider.getALl);
router.get("/monsters/:id", monstersProvider.getOneMonster);

//weapons
router.get("/weapons", weaponsProvider.getALl);
router.get("/weapons/:id", weaponsProvider.getOneWeapon);

export { router };

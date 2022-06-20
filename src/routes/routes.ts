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
router.get("/armors", (request, response) => {
  armorsProvider().getALl(request, response);
});
router.get("/armors/:id", (request, response) => {
  armorsProvider().getOneArmor(request, response);
});

// characters
router.get("/characters", (request, response) => {
  charactersProvider().getALl(request, response);
});
router.get("/characters/:id", (request, response) => {
  charactersProvider().getOneCharacter(request, response);
});

// monsters
router.get("/monsters", (request, response) => {
  monstersProvider().getALl(request, response);
});
router.get("/monsters/:id", (request, response) => {
  monstersProvider().getOneMonster(request, response);
});

//weapons
router.get("/weapons", (request, response) => {
  weaponsProvider().getALl(request, response);
});
router.get("/weapons/:id", (request, response) => {
  weaponsProvider().getOneWeapon(request, response);
});

export { router };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Armors_provider_1 = require("../providers/Armors.provider");
const Characters_provider_1 = require("../providers/Characters.provider");
const Monsters_provider_1 = require("../providers/Monsters.provider");
const Weapons_provider_1 = require("../providers/Weapons.provider");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, response) => {
    response.status(200).json({
        nickname: "Whyy",
        author: "Icaro Vieira",
        version: "1.0.0",
        api_name: "The witcher`s",
        get: ["/armors", "/characters", "/monsters", "/weapons"],
        prams: ["?page=number"],
    });
});
// armors
router.get("/armors", (request, response) => {
    (0, Armors_provider_1.armorsProvider)().getALl(request, response);
});
router.get("/armors/:id", (request, response) => {
    (0, Armors_provider_1.armorsProvider)().getOneArmor(request, response);
});
// characters
router.get("/characters", (request, response) => {
    (0, Characters_provider_1.charactersProvider)().getALl(request, response);
});
router.get("/characters/:id", (request, response) => {
    (0, Characters_provider_1.charactersProvider)().getOneCharacter(request, response);
});
// monsters
router.get("/monsters", (request, response) => {
    (0, Monsters_provider_1.monstersProvider)().getALl(request, response);
});
router.get("/monsters/:id", (request, response) => {
    (0, Monsters_provider_1.monstersProvider)().getOneMonster(request, response);
});
//weapons
router.get("/weapons", (request, response) => {
    (0, Weapons_provider_1.weaponsProvider)().getALl(request, response);
});
router.get("/weapons/:id", (request, response) => {
    (0, Weapons_provider_1.weaponsProvider)().getOneWeapon(request, response);
});

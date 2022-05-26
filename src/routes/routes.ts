import { Router } from "express";
import { ArmorController } from "../controllers/Armor.controller";
import { CharacterController } from "../controllers/Character.controller";

const router = Router();

const armorController = new ArmorController();
const characterController = new CharacterController();

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

export { router };

import { Router } from "express";
import { ArmorController } from "../controllers/Armor.controller";

const router = Router();

const armorController = new ArmorController();

router.get("/", (request, response) => {
  response.status(200).json({
    name: "Whyy",
  });
});
router.get("/armors", armorController.getALl);

export { router };

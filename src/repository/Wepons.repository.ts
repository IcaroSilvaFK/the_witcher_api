import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class WeaponsRepository {
  async getAll() {
    const weaponsExists = await prisma.weapons.findMany();

    if (weaponsExists.length <= 0) {
      const { resources }: ICloudinaryProps = await clientCloudinary.search
        .expression("folder:weapons")
        .max_results(70)
        .execute();
      for await (let weapon of resources) {
        await prisma.weapons.create({
          data: {
            filename: weapon.filename,
            format: weapon.format,
            height: weapon.height,
            imageUrl: weapon.secure_url,
            width: weapon.width,
          },
        });
      }
    } else {
      return weaponsExists;
    }
    const weapons = await prisma.weapons.findMany();

    return weapons;
  }
  async getOneWeapon(id: string) {
    const weapon = await prisma.weapons.findFirst({
      where: {
        id,
      },
    });

    return weapon;
  }
}

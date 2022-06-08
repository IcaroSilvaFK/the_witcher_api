import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class WeaponsRepository {
  async getAll(page?: number) {
    const weaponsCount = await prisma.weapons.count();
    const limit = 30;

    if (!weaponsCount) {
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
    }
    const weapons = await prisma.weapons.findMany({
      skip: page ? (page - 1) * limit : 0,
      take: page ? limit : weaponsCount,
    });
    const has_next_page =
      Math.abs(limit + (page! - 1) * limit - weaponsCount) < limit
        ? false
        : true;
    return {
      weapons,
      has_next_page: page ? has_next_page : undefined,
    };
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

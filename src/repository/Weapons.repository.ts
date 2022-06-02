import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class WeaponsRepository {
  async getAll() {
    const weaponsCount = await prisma.weapons.count();

    if (weaponsCount <= 0) {
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

  async getPagination(page: number) {
    const weaponsCounter = await prisma.weapons.count();
    const take = 20;
    const pageSkip = page > 1 ? take * page - take : 0;
    const validationSkip =
      pageSkip > weaponsCounter ? take * (page - 1) - take : pageSkip;

    const weapons = await prisma.weapons.findMany({
      take:
        weaponsCounter - (take * page - take) > 20
          ? take
          : weaponsCounter - (take * (pageSkip - 1) - take),
      skip: validationSkip,
    });

    return {
      data: weapons,
      hasNextPage: weaponsCounter - validationSkip > 20 ? true : false,
    };
  }
}

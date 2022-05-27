import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class MonstersRepository {
  async getAll() {
    const monstersExists = await prisma.monster.findMany();

    if (monstersExists.length <= 0) {
      const { resources }: ICloudinaryProps = await clientCloudinary.search
        .expression("folder:monsters")
        .max_results(72)
        .execute();

      for await (let monster of resources) {
        await prisma.monster.create({
          data: {
            filename: monster.filename,
            format: monster.format,
            height: monster.height,
            imageUrl: monster.secure_url,
            width: monster.width,
          },
        });
      }
    } else {
      return monstersExists;
    }
    const monsters = await prisma.monster.findMany();
    return monsters;
  }
  async getMonster(id: string) {
    const monster = await prisma.monster.findFirst({
      where: {
        id,
      },
    });

    return monster;
  }
}

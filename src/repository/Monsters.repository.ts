import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class MonstersRepository {
  async getAll() {
    const monstersCount = await prisma.monster.count();

    if (monstersCount <= 0) {
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
  async getPagination(page: number) {
    const monstersCount = await prisma.monster.count();
    const take = 20;
    const pageSkip = page > 1 ? take * page - take : 0;
    const validationSkip =
      pageSkip > monstersCount ? take * (page - 1) - take : pageSkip;

    const monsters = await prisma.monster.findMany({
      take:
        monstersCount - (take * page - take) > 20
          ? take
          : monstersCount - (take * (pageSkip - 1) - take),
      skip: validationSkip,
    });

    return {
      data: monsters,
      hasNextPage: monstersCount - validationSkip > 20 ? true : false,
    };
  }
}

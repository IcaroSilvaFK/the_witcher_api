import { Prisma } from "@prisma/client";
import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class MonstersRepository {
  async getAll(page?: number) {
    const monstersCount = await prisma.monster.count();
    const limit = 30;
    if (!monstersCount) {
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
    const monsters = await prisma.monster.findMany({
      skip: page ? (page - 1) * limit : 0,
      take: page ? limit : monstersCount,
    });
    const has_next_page =
      Math.abs(limit + (page! - 1) * limit - monstersCount) < limit
        ? false
        : true;

    return {
      monsters,
      has_next_page: page ? has_next_page : undefined,
    };
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

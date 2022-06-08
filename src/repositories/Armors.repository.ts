import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class ArmorsRepository {
  async getAll(page?: number) {
    const armorsCount = await prisma.armors.count();
    const limit = 30;
    if (!armorsCount) {
      const { resources }: ICloudinaryProps = await clientCloudinary.search
        .expression("folder:armor")
        .max_results(132)
        .execute();

      for (let image of resources) {
        await prisma.armors.create({
          data: {
            filename: image.filename,
            format: image.format,
            height: image.height,
            width: image.width,
            imageUrl: image.secure_url,
          },
        });
      }
    }
    const armors = await prisma.armors.findMany({
      skip: page ? (page - 1) * limit : 0,
      take: page ? limit : armorsCount,
    });
    const has_next_page =
      Math.abs(limit + (page! - 1) * limit - armorsCount) < limit
        ? false
        : true;
    return {
      armors,
      has_next_page: page ? has_next_page : undefined,
    };
  }

  async getOneArmor(id: string) {
    const armor = await prisma.armors.findFirst({
      where: {
        id,
      },
    });
    return armor;
  }
}

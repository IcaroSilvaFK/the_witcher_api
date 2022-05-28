import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class ArmorsRepository {
  async getAll() {
    const armorsExists = await prisma.armors.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (armorsExists.length <= 0) {
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
    } else {
      return armorsExists;
    }
    const armors = await prisma.armors.findMany();

    return armors;
  }

  async getOneArmor(id: string) {
    const armor = await prisma.armors.findFirst({
      where: {
        id,
      },
    });
    return armor;
  }
  async getPagination(page: number) {
    const armorsCount = await prisma.armors.count({});
    const quantityPerPages = 20;
    const pageSkip = page > 1 ? quantityPerPages * page - quantityPerPages : 0;
    const validationSkip =
      pageSkip > armorsCount
        ? quantityPerPages * (page - 1) - quantityPerPages
        : pageSkip;

    const response = await prisma.armors.findMany({
      take:
        armorsCount - (quantityPerPages * page - quantityPerPages) >= 20
          ? quantityPerPages
          : armorsCount -
            (quantityPerPages * (pageSkip - 1) - quantityPerPages),
      skip: validationSkip,
    });
    return {
      data: response,
      hasNextPage: armorsCount - validationSkip > 20 ? true : false,
    };
  }
}

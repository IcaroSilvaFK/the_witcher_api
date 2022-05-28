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
    const quantityPages = 20;
    const skip = page;
    console.log(quantityPages * skip - quantityPages);
    const response = await prisma.armors.findMany({
      take: quantityPages,
      skip: page > 1 ? quantityPages * skip - quantityPages : 0,
    });
    const hasNextPage = await prisma.armors.count({});
    const actualArmor = quantityPages * skip - quantityPages;
    console.log(hasNextPage - actualArmor);

    return {
      response,
      hasNextPage: hasNextPage - actualArmor >= 20 ? true : false,
    };
  }
}

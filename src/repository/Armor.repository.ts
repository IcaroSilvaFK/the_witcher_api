import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class ArmorRepository {
  async getAll() {
    const response = await prisma.armors.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (response.length <= 0) {
      console.log("entro");
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
      return resources;
    }
    return response;
  }

  async getOneArmor(id: string) {
    const response = await prisma.armors.findFirst({
      where: {
        id,
      },
    });
    return response;
  }
}

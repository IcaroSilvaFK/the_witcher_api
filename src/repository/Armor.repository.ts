import { clientCloudinary } from "../configs/cloudnary";
import { prisma } from "../prisma/prisma";

interface ICloudinaryProps {
  resources: [
    {
      filename: string;
      format: string;
      create_at: string;
      width: number;
      height: number;
      secure_url: string;
    }
  ];
}

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

  async getOne(id: string) {
    const response = await prisma.armors.findFirst({
      where: {
        id,
      },
    });
    return response;
  }
}

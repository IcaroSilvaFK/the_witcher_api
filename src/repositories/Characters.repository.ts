import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class CharactersRepository {
  async getAll(page?: number) {
    const charactersCount = await prisma.character.count();
    const limit = 30;
    if (!charactersCount) {
      const { resources }: ICloudinaryProps = await clientCloudinary.search
        .expression("folder:character")
        .max_results(50)
        .execute();

      for await (let image of resources) {
        await prisma.character.create({
          data: {
            filename: image.filename,
            format: image.format,
            height: image.height,
            imageUrl: image.secure_url,
            width: image.width,
          },
        });
      }
    }

    const characters = await prisma.character.findMany({
      skip: page ? (page - 1) * limit : 0,
      take: page ? limit : charactersCount,
    });

    const has_next_page =
      Math.abs(limit + (page! - 1) * limit - charactersCount) < limit
        ? false
        : true;

    return {
      characters,
      has_next_page: page ? has_next_page : undefined,
    };
  }

  async getCharacter(id: string) {
    const character = await prisma.character.findFirst({
      where: {
        id,
      },
    });
    return character;
  }
}

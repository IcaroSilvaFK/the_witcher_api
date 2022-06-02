import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class CharactersRepository {
  async getAll() {
    const charactersCount = await prisma.character.count();

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
    const characters = await prisma.character.findMany();
    return characters;
  }

  async getCharacter(id: string) {
    const character = await prisma.character.findFirst({
      where: {
        id,
      },
    });
    return character;
  }
  async getPagination(page: number) {
    const charactersCount = await prisma.character.count();
    const take = 20;
    const pageSkip = page > 1 ? take * page - take : 0;
    const validationSkip =
      pageSkip > charactersCount ? take * (page - 1) - take : pageSkip;

    const characters = await prisma.character.findMany({
      take:
        charactersCount - (take * page - take) >= 20
          ? take
          : charactersCount - (take * (pageSkip - 1) - take),
      skip: validationSkip,
    });

    return {
      data: characters,
      hasNextPage: charactersCount - validationSkip > 20 ? true : false,
    };
  }
}

import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class CharactersRepository {
  async getAll() {
    const charactersExists = await prisma.character.findMany();

    if (charactersExists.length <= 0) {
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
    } else {
      return charactersExists;
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
}

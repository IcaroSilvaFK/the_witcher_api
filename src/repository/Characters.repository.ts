import { clientCloudinary } from "../configs/cloudnary";
import { ICloudinaryProps } from "../interfaces/ICloudnary.Interface";
import { prisma } from "../prisma/prisma";

export class CharactersRepository {
  async getAll() {
    const characters = await prisma.character.findMany();

    if (characters.length <= 0) {
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
      return resources;
    }
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

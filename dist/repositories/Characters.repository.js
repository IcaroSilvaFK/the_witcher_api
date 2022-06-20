"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersRepository = void 0;
const cloudnary_1 = require("../configs/cloudnary");
const prisma_1 = require("../prisma/prisma");
class CharactersRepository {
    async getAll(page) {
        const charactersCount = await prisma_1.prisma.character.count();
        const limit = 30;
        if (!charactersCount) {
            const { resources } = await cloudnary_1.clientCloudinary.search
                .expression("folder:character")
                .max_results(50)
                .execute();
            for await (let image of resources) {
                await prisma_1.prisma.character.create({
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
        const characters = await prisma_1.prisma.character.findMany({
            skip: page ? (page - 1) * limit : 0,
            take: page ? limit : charactersCount,
        });
        const has_next_page = Math.abs(limit + (page - 1) * limit - charactersCount) < limit
            ? false
            : true;
        return {
            characters,
            has_next_page: page ? has_next_page : undefined,
        };
    }
    async getCharacter(id) {
        const character = await prisma_1.prisma.character.findFirst({
            where: {
                id,
            },
        });
        return character;
    }
}
exports.CharactersRepository = CharactersRepository;

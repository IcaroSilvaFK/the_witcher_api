"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonstersRepository = void 0;
const cloudnary_1 = require("../configs/cloudnary");
const prisma_1 = require("../prisma/prisma");
class MonstersRepository {
    async getAll(page) {
        const monstersCount = await prisma_1.prisma.monster.count();
        const limit = 30;
        if (!monstersCount) {
            const { resources } = await cloudnary_1.clientCloudinary.search
                .expression("folder:monsters")
                .max_results(72)
                .execute();
            for await (let monster of resources) {
                await prisma_1.prisma.monster.create({
                    data: {
                        filename: monster.filename,
                        format: monster.format,
                        height: monster.height,
                        imageUrl: monster.secure_url,
                        width: monster.width,
                    },
                });
            }
        }
        const monsters = await prisma_1.prisma.monster.findMany({
            skip: page ? (page - 1) * limit : 0,
            take: page ? limit : monstersCount,
        });
        const has_next_page = Math.abs(limit + (page - 1) * limit - monstersCount) < limit
            ? false
            : true;
        return {
            monsters,
            has_next_page: page ? has_next_page : undefined,
        };
    }
    async getMonster(id) {
        const monster = await prisma_1.prisma.monster.findFirst({
            where: {
                id,
            },
        });
        return monster;
    }
}
exports.MonstersRepository = MonstersRepository;

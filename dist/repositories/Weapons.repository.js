"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponsRepository = void 0;
const cloudnary_1 = require("../configs/cloudnary");
const prisma_1 = require("../prisma/prisma");
class WeaponsRepository {
    async getAll(page) {
        const weaponsCount = await prisma_1.prisma.weapons.count();
        const limit = 30;
        if (!weaponsCount) {
            const { resources } = await cloudnary_1.clientCloudinary.search
                .expression("folder:weapons")
                .max_results(70)
                .execute();
            for await (let weapon of resources) {
                await prisma_1.prisma.weapons.create({
                    data: {
                        filename: weapon.filename,
                        format: weapon.format,
                        height: weapon.height,
                        imageUrl: weapon.secure_url,
                        width: weapon.width,
                    },
                });
            }
        }
        const weapons = await prisma_1.prisma.weapons.findMany({
            skip: page ? (page - 1) * limit : 0,
            take: page ? limit : weaponsCount,
        });
        const has_next_page = Math.abs(limit + (page - 1) * limit - weaponsCount) < limit
            ? false
            : true;
        return {
            weapons,
            has_next_page: page ? has_next_page : undefined,
        };
    }
    async getOneWeapon(id) {
        const weapon = await prisma_1.prisma.weapons.findFirst({
            where: {
                id,
            },
        });
        return weapon;
    }
}
exports.WeaponsRepository = WeaponsRepository;

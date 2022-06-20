"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorsRepository = void 0;
const cloudnary_1 = require("../configs/cloudnary");
const prisma_1 = require("../prisma/prisma");
class ArmorsRepository {
    async getAll(page) {
        const armorsCount = await prisma_1.prisma.armors.count();
        const limit = 30;
        if (!armorsCount) {
            const { resources } = await cloudnary_1.clientCloudinary.search
                .expression("folder:armor")
                .max_results(132)
                .execute();
            for (let image of resources) {
                await prisma_1.prisma.armors.create({
                    data: {
                        filename: image.filename,
                        format: image.format,
                        height: image.height,
                        width: image.width,
                        imageUrl: image.secure_url,
                    },
                });
            }
        }
        const armors = await prisma_1.prisma.armors.findMany({
            skip: page ? (page - 1) * limit : 0,
            take: page ? limit : armorsCount,
        });
        const has_next_page = Math.abs(limit + (page - 1) * limit - armorsCount) < limit
            ? false
            : true;
        return {
            armors,
            has_next_page: page ? has_next_page : undefined,
        };
    }
    async getOneArmor(id) {
        const armor = await prisma_1.prisma.armors.findFirst({
            where: {
                id,
            },
        });
        return armor;
    }
}
exports.ArmorsRepository = ArmorsRepository;

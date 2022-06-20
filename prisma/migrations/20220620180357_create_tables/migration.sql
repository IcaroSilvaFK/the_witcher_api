-- CreateTable
CREATE TABLE "armors" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "armors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armors_descriptions" (
    "id" TEXT NOT NULL,
    "armor_id" TEXT NOT NULL,

    CONSTRAINT "armors_descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters_descriptions" (
    "id" TEXT NOT NULL,
    "chracter_id" TEXT NOT NULL,

    CONSTRAINT "characters_descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monsters" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monsters_descriptions" (
    "id" TEXT NOT NULL,
    "monster_id" TEXT NOT NULL,

    CONSTRAINT "monsters_descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapons_descriptions" (
    "id" TEXT NOT NULL,
    "weapon_id" TEXT NOT NULL,

    CONSTRAINT "weapons_descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "armors_descriptions_armor_id_key" ON "armors_descriptions"("armor_id");

-- CreateIndex
CREATE UNIQUE INDEX "characters_descriptions_chracter_id_key" ON "characters_descriptions"("chracter_id");

-- CreateIndex
CREATE UNIQUE INDEX "monsters_descriptions_monster_id_key" ON "monsters_descriptions"("monster_id");

-- CreateIndex
CREATE UNIQUE INDEX "weapons_descriptions_weapon_id_key" ON "weapons_descriptions"("weapon_id");

-- AddForeignKey
ALTER TABLE "armors_descriptions" ADD CONSTRAINT "armors_descriptions_armor_id_fkey" FOREIGN KEY ("armor_id") REFERENCES "armors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters_descriptions" ADD CONSTRAINT "characters_descriptions_chracter_id_fkey" FOREIGN KEY ("chracter_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monsters_descriptions" ADD CONSTRAINT "monsters_descriptions_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weapons_descriptions" ADD CONSTRAINT "weapons_descriptions_weapon_id_fkey" FOREIGN KEY ("weapon_id") REFERENCES "weapons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

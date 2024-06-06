-- CreateTable
CREATE TABLE `Idioma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instructor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha_de_nacimiento` VARCHAR(191) NOT NULL,
    `experiencia` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aprendizaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idioma_id` INTEGER NOT NULL,
    `instructor_id` INTEGER NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `hora` VARCHAR(191) NOT NULL,
    `numero_horas` INTEGER NOT NULL,
    `nivel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aprendizaje` ADD CONSTRAINT `Aprendizaje_idioma_id_fkey` FOREIGN KEY (`idioma_id`) REFERENCES `Idioma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aprendizaje` ADD CONSTRAINT `Aprendizaje_instructor_id_fkey` FOREIGN KEY (`instructor_id`) REFERENCES `Instructor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Aprendizaje" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Idioma" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';

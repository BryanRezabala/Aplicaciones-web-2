-- CreateTable
CREATE TABLE "Idioma" (
    "id" SERIAL NOT NULL,
    "descripcion_del_idioma" TEXT,

    CONSTRAINT "Idioma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha_de_nacimiento" TEXT,
    "experiencia" INTEGER,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aprendizaje" (
    "id" SERIAL NOT NULL,
    "id_idioma" INTEGER,
    "id_instructor" INTEGER,
    "fecha" TEXT,
    "hora" TEXT,
    "numero_horas_curso" DOUBLE PRECISION,
    "nivel" TEXT,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Aprendizaje_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aprendizaje" ADD CONSTRAINT "Aprendizaje_id_idioma_fkey" FOREIGN KEY ("id_idioma") REFERENCES "Idioma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aprendizaje" ADD CONSTRAINT "Aprendizaje_id_instructor_fkey" FOREIGN KEY ("id_instructor") REFERENCES "Instructor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

import { PrismaClient } from '@prisma/client';
import * as idiomaRoutes from './routes/idiomaRoutes';
import * as instructorRoutes from './routes/instructorRoutes';
import * as aprendizajeRoutes from './routes/aprendizajeRoutes';

const prisma = new PrismaClient();

async function main() {
  try {
    // Rutas para Idiomas
    const idiomas = await idiomaRoutes.getIdiomas();
    console.log(idiomas);

    const idioma = await idiomaRoutes.getIdiomaById(1);
    console.log(idioma);

    const newIdioma = await idiomaRoutes.createIdioma('Español');
    console.log(newIdioma);

    // Rutas para Instructores
    const instructores = await instructorRoutes.getInstructores();
    console.log(instructores);

    const instructor = await instructorRoutes.getInstructorById(1);
    console.log(instructor);

    const newInstructor = await instructorRoutes.createInstructor('Juan Pérez', '1980-01-01', 10);
    console.log(newInstructor);

    // Rutas para Aprendizajes
    const aprendizajes = await aprendizajeRoutes.getAprendizajes();
    console.log(aprendizajes);

    const aprendizaje = await aprendizajeRoutes.getAprendizajeById(1);
    console.log(aprendizaje);

    const newAprendizaje = await aprendizajeRoutes.createAprendizaje(
      1,
      1,
      '2024-06-11',
      '16:00',
      2,
      'Intermedio'
    );
    console.log(newAprendizaje);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    console.log('Servidor iniciado');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

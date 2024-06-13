// src/test.ts
import prisma from './prisma/client';
import { IdiomaEntity } from './entities/idioma.entity';
import { InstructorEntity } from './entities/instructor.entity';
import { AprendizajeEntity } from './entities/aprendizaje.entity';

async function main() {
  try {
    const nuevoIdioma = await IdiomaEntity.create({ descripcion: 'Español' });
    console.log('Nuevo idioma creado:', nuevoIdioma);

    const todosLosInstructores = await InstructorEntity.findAll();
    console.log('Todos los instructores:', todosLosInstructores);

    const nuevoAprendizaje = await AprendizajeEntity.create({
      idioma: { connect: { id: nuevoIdioma.id } },
      instructor: { connect: { id: 1 } },
      fecha: '2024-06-15',
      hora: '10:00',
      numero_horas: 1,
      nivel: 'Principiante',
    });
    console.log('Nuevo aprendizaje creado:', nuevoAprendizaje);

    const instructorEncontrado = await InstructorEntity.findById(1);
    console.log('Instructor encontrado:', instructorEncontrado);
  } catch (error) {
    console.error('Error en prueba:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});

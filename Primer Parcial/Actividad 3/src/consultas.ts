// Importar Prisma Client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Función para consultar todos los cursos
async function consultarCursos() {
  const cursos = await prisma.curso.findMany();
  console.log(cursos);
}

// Llamar a la función para consultar los cursos
consultarCursos()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
});

// Exportar la función para ser utilizada en otros archivos si es necesario
export { consultarCursos };

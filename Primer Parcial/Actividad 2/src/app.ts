// Importa el Prisma Client
import { PrismaClient } from '@prisma/client';

// Inicializacion del cliente
const prisma = new PrismaClient();

async function verificarEstado(idAprendizaje: number) {
  try {
    const aprendizaje = await prisma.aprendizaje.findUnique({
      where: { id: idAprendizaje },
      select: { estado: true }, // Selecciona solo el campo "estado"
    });

    if (aprendizaje) {
      console.log(`El estado de la transacción con ID ${idAprendizaje} es ${aprendizaje.estado}`);
    } else {
      console.log(`No se encontró ninguna transacción con ID ${idAprendizaje}`);
    }
  } catch (error) {
    console.error('Error al verificar el estado:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function recuperarTransaccion(idAprendizaje: number) {
  try {
    const aprendizaje = await prisma.aprendizaje.findUnique({
      where: { id: idAprendizaje },
    });

    if (aprendizaje) {
      // Actualiza el estado a verdadero
      await prisma.aprendizaje.update({
        where: { id: idAprendizaje },
        data: { estado: true },
      });
      console.log(`La transacción con ID ${idAprendizaje} ha sido recuperada.`);
    } else {
      console.log(`No se encontró ninguna transacción con ID ${idAprendizaje}.`);
    }
  } catch (error) {
    console.error('Error al recuperar la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llama las funciones con los IDs de las transacciones que deseas verificar y recuperar
verificarEstado(1); // Cambia el ID según tu caso
recuperarTransaccion(1); // Cambia el ID según tu caso

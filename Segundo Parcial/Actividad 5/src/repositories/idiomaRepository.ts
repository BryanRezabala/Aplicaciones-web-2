// src/repositories/IdiomaRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class IdiomaRepository {
  static async getAll() {
    try {
      return await prisma.idioma.findMany();
    } catch (error) {
      console.error('Error retrieving idiomas:', error);
      throw new Error('Error retrieving idiomas');
    }
  }

  static async getById(id: number) {
    try {
      return await prisma.idioma.findUnique({
        where: { id }
      });
    } catch (error) {
      console.error(`Error retrieving idioma with id ${id}:`, error);
      throw new Error(`Error retrieving idioma with id ${id}`);
    }
  }

  static async create(descripcion: string) {
    try {
      return await prisma.idioma.create({
        data: { descripcion }
      });
    } catch (error) {
      console.error('Error creating idioma:', error);
      throw new Error('Error creating idioma');
    }
  }

  static async update(id: number, nuevaDescripcion: string) {
    try {
      return await prisma.idioma.update({
        where: { id },
        data: { descripcion: nuevaDescripcion }
      });
    } catch (error) {
      console.error(`Error updating idioma with id ${id}:`, error);
      throw new Error(`Error updating idioma with id ${id}`);
    }
  }

  static async delete(id: number) {
    try {
      return await prisma.idioma.delete({
        where: { id }
      });
    } catch (error) {
      console.error(`Error deleting idioma with id ${id}:`, error);
      throw new Error(`Error deleting idioma with id ${id}`);
    }
  }
}

export default IdiomaRepository;

// src/repositories/AprendizajeRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AprendizajeRepository {
  static async getAll() {
    try {
      return await prisma.aprendizaje.findMany();
    } catch (error) {
      throw new Error('Error retrieving aprendizajes');
    }
  }

  static async getById(id: number) {
    try {
      return await prisma.aprendizaje.findUnique({
        where: { id }
      });
    } catch (error) {
      throw new Error(`Error retrieving aprendizaje with id ${id}`);
    }
  }

  static async create(
    idioma_id: number,
    instructor_id: number,
    fecha: string,
    hora: string,
    numero_horas: number,
    nivel: string
  ) {
    try {
      return await prisma.aprendizaje.create({
        data: {
          idioma_id,
          instructor_id,
          fecha,
          hora,
          numero_horas,
          nivel
        }
      });
    } catch (error) {
      throw new Error('Error creating aprendizaje');
    }
  }

  static async update(
    id: number,
    idioma_id: number,
    instructor_id: number,
    fecha: string,
    hora: string,
    numero_horas: number,
    nivel: string
  ) {
    try {
      return await prisma.aprendizaje.update({
        where: { id },
        data: {
          idioma_id,
          instructor_id,
          fecha,
          hora,
          numero_horas,
          nivel
        }
      });
    } catch (error) {
      throw new Error(`Error updating aprendizaje with id ${id}`);
    }
  }

  static async delete(id: number) {
    try {
      return await prisma.aprendizaje.delete({
        where: { id }
      });
    } catch (error) {
      throw new Error(`Error deleting aprendizaje with id ${id}`);
    }
  }
}

export default AprendizajeRepository;

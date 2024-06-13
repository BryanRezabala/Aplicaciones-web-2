// src/repositories/InstructorRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class InstructorRepository {
  static async getAll() {
    try {
      return await prisma.instructor.findMany();
    } catch (error) {
      throw new Error('Error retrieving instructors');
    }
  }

  static async getById(id: number) {
    try {
      return await prisma.instructor.findUnique({
        where: { id }
      });
    } catch (error) {
      throw new Error(`Error retrieving instructor with id ${id}`);
    }
  }

  static async create(
    nombre: string,
    fecha_de_nacimiento: string,
    experiencia: number
  ) {
    try {
      return await prisma.instructor.create({
        data: {
          nombre,
          fecha_de_nacimiento,
          experiencia
        }
      });
    } catch (error) {
      throw new Error('Error creating instructor');
    }
  }

  static async update(
    id: number,
    nombre: string,
    fecha_de_nacimiento: string,
    experiencia: number
  ) {
    try {
      return await prisma.instructor.update({
        where: { id },
        data: {
          nombre,
          fecha_de_nacimiento,
          experiencia
        }
      });
    } catch (error) {
      throw new Error(`Error updating instructor with id ${id}`);
    }
  }

  static async delete(id: number) {
    try {
      return await prisma.instructor.delete({
        where: { id }
      });
    } catch (error) {
      throw new Error(`Error deleting instructor with id ${id}`);
    }
  }
}

export default InstructorRepository;

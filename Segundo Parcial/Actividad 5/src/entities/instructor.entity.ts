// src/entities/instructor.entity.ts
import { PrismaClient, Instructor, Prisma } from '@prisma/client';
import prisma from '../prisma/client';

export class InstructorEntity {
  static async findAll(): Promise<Instructor[]> {
    return prisma.instructor.findMany();
  }

  static async findById(id: number): Promise<Instructor | null> {
    return prisma.instructor.findUnique({ where: { id } });
  }

  static async create(data: Prisma.InstructorCreateInput): Promise<Instructor> {
    return prisma.instructor.create({ data });
  }

  static async update(id: number, data: Prisma.InstructorUpdateInput): Promise<Instructor> {
    return prisma.instructor.update({ where: { id }, data });
  }

  static async delete(id: number): Promise<Instructor> {
    return prisma.instructor.delete({ where: { id } });
  }
}

export default InstructorEntity;

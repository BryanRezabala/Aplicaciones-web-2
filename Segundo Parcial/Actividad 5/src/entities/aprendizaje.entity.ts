// src/entities/aprendizaje.entity.ts
import { PrismaClient, Aprendizaje, Prisma } from '@prisma/client';
import prisma from '../prisma/client';

export class AprendizajeEntity {
  static async findAll(): Promise<Aprendizaje[]> {
    return prisma.aprendizaje.findMany();
  }

  static async findById(id: number): Promise<Aprendizaje | null> {
    return prisma.aprendizaje.findUnique({ where: { id } });
  }

  static async create(data: Prisma.AprendizajeCreateInput): Promise<Aprendizaje> {
    return prisma.aprendizaje.create({ data });
  }

  static async update(id: number, data: Prisma.AprendizajeUpdateInput): Promise<Aprendizaje> {
    return prisma.aprendizaje.update({ where: { id }, data });
  }

  static async delete(id: number): Promise<Aprendizaje> {
    return prisma.aprendizaje.delete({ where: { id } });
  }
}

export default AprendizajeEntity;

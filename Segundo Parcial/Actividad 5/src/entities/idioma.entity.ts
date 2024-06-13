// src/entities/idioma.entity.ts
import { PrismaClient, Idioma, Prisma } from '@prisma/client';
import prisma from '../prisma/client';

export class IdiomaEntity {
  static async create(data: Prisma.IdiomaCreateInput): Promise<Idioma> {
    return prisma.idioma.create({ data });
  }

  static async findById(id: number): Promise<Idioma | null> {
    return prisma.idioma.findUnique({ where: { id } });
  }

  static async findAll(): Promise<Idioma[]> {
    return prisma.idioma.findMany();
  }
}

export default IdiomaEntity;

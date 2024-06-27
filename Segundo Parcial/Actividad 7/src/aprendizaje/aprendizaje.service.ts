import { Injectable } from '@nestjs/common';
import { CreateAprendizajeInput } from './dto/create-aprendizaje.input';
import { UpdateAprendizajeInput } from './dto/update-aprendizaje.input';
import { Aprendizaje } from './entities/aprendizaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AprendizajeService {
  constructor(
    @InjectRepository(Aprendizaje)
    private readonly aprendizajeRepository: Repository<Aprendizaje>
  ) {}

  async create(createAprendizajeInput: CreateAprendizajeInput): Promise<Aprendizaje> {
    const aprendizaje = await this.aprendizajeRepository.create({
      ...createAprendizajeInput,
      idioma: { id: createAprendizajeInput.idiomaid },
      instructor: { id: createAprendizajeInput.instructorid }
    });
    const { id } = await this.aprendizajeRepository.save(aprendizaje);
    return await this.findOne(+id);
  }

  async findAll(estado: string): Promise<Aprendizaje[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.aprendizajeRepository.find({ where: { estado } });
    }
    return await this.aprendizajeRepository.find();
  }

  async findOne(id: number): Promise<Aprendizaje> {
    return await this.aprendizajeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAprendizajeInput: UpdateAprendizajeInput): Promise<Aprendizaje> {
    const updated = await this.aprendizajeRepository.preload(updateAprendizajeInput);
    if (!updated) throw new Error(`Aprendizaje with id: ${id} not found`);
    return await this.aprendizajeRepository.save(updated);
  }

  async remove(id: number) {
    const aprendizaje = await this.findOne(id);
    aprendizaje.estado = 'Desactivo';
    return this.aprendizajeRepository.save(aprendizaje);
  }
}
